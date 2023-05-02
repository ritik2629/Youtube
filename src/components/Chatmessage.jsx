import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Chatmessage = (props) => {
  // console.log(props)
  const { name, message } = props;
  return (
    <div className="   p-2 flex ">
      <div className=" flex text-2xl gap-3">
        <FaUserCircle />
        <div className=" text-gray-500 text-sm">
          <h2>{name}</h2>
        </div>
      </div>
      <div className=" font-semibold ml-4">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chatmessage;
