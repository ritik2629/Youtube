import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiDownload2Fill, RiShareForwardLine } from "react-icons/ri";
import { numberFormatter } from "../utils/helper";
const WatchButton = ({ videoDetails }) => {
  return (
    <div className=" flex items-center py-3">
      <button className=" flex items-center text-xl  bg-gray-100 p-2 rounded-l-full hover:bg-slate-400">
        <BiLike />
        <h1>{numberFormatter.format(videoDetails?.statistics?.likeCount)}</h1>
      </button>
      <button className=" text-xl  bg-gray-100 p-3 rounded-r-full hover:bg-slate-400">
        <BiDislike />
      </button>
      <button className=" flex items-center text-xl  bg-gray-100 p-2 rounded-full hover:bg-slate-400 ml-3">
        <RiShareForwardLine />
        <h1 className="ml-2 text-lg">Share</h1>
      </button>
      <button className=" flex items-center text-xl  bg-gray-100 p-2 rounded-full hover:bg-slate-400 ml-3">
        <RiDownload2Fill />
        <h1 className="ml-2 text-lg">Download</h1>
      </button>
    </div>
  );
};

export default WatchButton;
