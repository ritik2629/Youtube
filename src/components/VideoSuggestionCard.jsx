import React from "react";
import { dateDiff, vidDuration } from "../utils/helper";

const VideoSuggestionCard = ({ info }) => {
  console.log(info);
  const { snippet } = info;
  const { channelTitle, title, publishTime, thumbnails } = snippet;
  return (
    <div className=" flex py-2">
      <div >
        <img src={thumbnails?.maxres?.url !==undefined ? thumbnails?.maxres?.url : thumbnails?.high?.url} alt="" className=" h-24 w-44 rounded-lg mr-2"/>
      </div>
      <div>
        <h1 className=" text-sm font-semibold">{title.slice(0, 30) + (title.length > 30 ? "..." : "")}</h1>
        <p className=" text-gray-600">{channelTitle}</p>
        <p className=" text-gray-600 text-xs">{dateDiff(publishTime)}</p>
      </div>
    </div>
  );
};
export default VideoSuggestionCard;
