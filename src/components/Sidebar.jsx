import { AiFillHome } from "react-icons/ai";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BiLike } from "react-icons/bi";

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const state = useSelector((state) => state.toggle.isMenuOpen);
  console.log(state);

  if (!state) return null; //early return
  return (
    <div className=" p-2 w-52">
      <Link to='/'>
      <div className=" flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <AiFillHome />
        <h1>Home</h1>
      </div>
      </Link>
      <div className="flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <SiYoutubemusic />
        <h1>Shorts</h1>
      </div>
      <div className="flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <SiYoutubegaming />
        <h1>Subscriptions</h1>
      </div>
      <div className="flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <MdOutlineVideoLibrary />
        <h1>Library</h1>
      </div>
      <div className="flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <GrHistory />
        <h1>History</h1>
      </div>
      <div className="flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <MdOutlineWatchLater />
        <h1>Watch later</h1>
      </div>
      <div className="flex items-center gap-3 mb-3 text-lg hover:cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2">
        <BiLike />
        <h1>Liked videos</h1>
      </div>
    </div>
  );
};
export default Sidebar;
