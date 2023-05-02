import React, { useState } from "react";
import { dateDiff, numberFormatter } from "../utils/helper";

const ChannelDescription = ({ videoDetails }) => {
  const [visible, setVisible] = useState(false);
  // console.log(videoDetails);
  return (
    <div
      className={
        "bg-gray-100 mt-3 py-3 px-4 rounded-lg relative -z-10 lg:z-10 hover:bg-gray-200 group " +
        (!visible && "h-32 overflow-hidden pb-8")
      }
    >
      <div className="text-sm font-bold">
        <span className="pr-3">
          {numberFormatter.format(videoDetails?.statistics?.viewCount)} views
        </span>
        <span>{dateDiff(videoDetails.snippet.publishedAt)}</span>
      </div>
      <div className="text-sm whitespace-pre-line">{videoDetails.snippet.description}</div>
      {!visible && (
        <button
          className="font-bold text-sm absolute bottom-[0px] w-full bg-gray-100 text-gray-700 text-left pb-2 group-hover:bg-slate-200 hover:text-black "
          onClick={() => setVisible(true)}
        >
          Show more
        </button>
      )}

      <button
        className="font-bold text-sm pt-6 hover:text-black"
        onClick={() => setVisible(false)}
      >
        Show less
      </button>
    </div>
  );
};

export default ChannelDescription;
