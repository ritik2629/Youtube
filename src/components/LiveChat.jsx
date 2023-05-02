import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/features/chatSlice";
import { generateRandomNames, generateText } from "../utils/helper";
import { FaUserCircle } from "react-icons/fa";

const LiveChat = () => {
  const [chat, setChat] = useState("");
  const [hide,setHide]=useState(true)
  const state = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateText(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  function chatHandler(e) {
    e.preventDefault()
    dispatch(
      addMessage({
        name: "Ritik Raj",
        message: chat,
      })
    );
  }
  // setChat('')

  return (
    <div>
      {hide &&<div className=" ml-2 p-2 border border-gray-200 h-[500px] rounded-t-lg w-full overflow-y-scroll flex flex-col-reverse bg-gray-100">
        {state.map((item) => (
          <Chatmessage {...item} key={Math.random()} />
        ))}
      </div>}
      {hide &&<form onSubmit={chatHandler}>
        <div className=" w-full border border-gray-200 p-6 ml-2 rounded-b-lg flex items-center">
          <div className=" text-2xl mr-2">
            <FaUserCircle />
          </div>
          <input
            type="text"
            placeholder="Say something..."
            className="border outline-none p-2 w-[20rem] rounded-lg hover:border-b-blue-700"
            onChange={(e) => setChat(e.target.value)}
          />
          <div>
            <button
              className=" bg-gray-500 p-2 rounded-md ml-2 hover:text-white hover:bg-blue-500"
              // onClick={chatHandler}
            >
              send
            </button>
          </div>
        </div>
      </form>}
      <div className=" py-2 mx-2 text-center w-full bg-blue-400 rounded-lg mt-2 cursor-pointer text-white">
        <button onClick={()=>setHide(!hide)}>{hide ? 'Hide Chat':'Show Chat'}</button>
      </div>
    </div>
  );
};

export default LiveChat;
