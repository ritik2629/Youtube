import React from "react";
import { dateDiff, numberFormatter, vidDuration } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  return (
    <div className=" m-3 w-96 h-[450px] shadow-md p-3 rounded-lg cursor-pointer ">
      <img src={thumbnails.high.url} alt={title} className=" rounded-lg" />
      <p className=" px-2 mx-1  top-[-20px] opacity-80 bg-black text-white rounded-sm text-xs font-bold w-max float-right relative right-1">
        {vidDuration(contentDetails.duration)}
      </p>
      <h1 className=" font-semibold">{title}</h1>
      <p className=" text-gray-500">{channelTitle}</p>
      <div className=" flex text-gray-600 gap-3">
        <p>{numberFormatter.format(statistics.viewCount)} views</p>
        <p>• {dateDiff(publishedAt)}</p>
      </div>
    </div>
  );
};

export const AdvideoCard = ({ info }) => {
  return (
    <div className=" border border-teal-300 rounded-lg">
      <VideoCard info={info} />
    </div>
  );
}; //!this is higher order component

export default VideoCard;
