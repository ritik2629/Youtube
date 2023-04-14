import { ImYoutube2, ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/features/toggleSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_SEARCH_API } from "../utils/Constant";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSuggestion(), 200);

    return () => clearTimeout(timer);
  }, [search]);

  function toggleHandler() {
    dispatch(toggleMenu());
  }

  function getSuggestion() {
    axios.get(YOUTUBE_SUGGESTION_SEARCH_API + search).then((res) => {
      const data = res.data;
      setSuggestion(data[1]);
      console.log(data[1]);
    });
  }

  return (
    <div className=" flex justify-between py-2 shadow-lg">
      <div className=" flex items-center gap-4 cursor-pointer mx-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={toggleHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className=" text-red-600 text-6xl justify-center">
          <ImYoutube2 />
        </div>
      </div>
      <div>
      <div className=" flex items-center">
          <input
            type="text"
            placeholder="Search"
            className=" p-2 w-[42rem] rounded-l-full border border-gray-200 outline-none focus:border-blue-600 mb-1"
            onChange={(e) => setSearch(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
          <button className=" cursor-pointer rounded-r-full border border-gray-300 p-3 bg-gray-300">
            <ImSearch />
          </button>
          </div>
          {showSuggestion && <div className=" fixed w-[42rem] bg-white text-black rounded-lg shadow-xl">
            <ul className="">
              {suggestion.map((item) => {
                return (
                  <li key={Math.random()} className=" p-[5px] flex items-center font-semibold hover:bg-gray-100">
                    <span className="mr-2 text-gray-400">
                      <ImSearch />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>}
      </div>
      <div className=" flex items-center text-2xl gap-2 mx-2">
        <TbVideoPlus />
        <IoIosNotifications />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
