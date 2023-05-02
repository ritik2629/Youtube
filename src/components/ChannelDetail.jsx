import React from "react";
import { numberFormatter } from "../utils/helper";
const ChannelDetail = ({ channelDetails, title }) => {
  // console.log(channelDetails)
  return (
    <div>
      <h1 className=" mt-3 mb-3 font-semibold">{title}</h1>
      <div className=" flex justify-between">
        <div className=" flex items-center gap-3">
          <img
            src={channelDetails?.snippet?.thumbnails?.high?.url}
            alt=""
            className="h-10 w-10 border border-black rounded-full"
          />
          <div>
            <h1 className=" font-semibold">{channelDetails?.snippet?.title}</h1>
            <p className=" text-gray-600 text-sm">{numberFormatter.format(channelDetails?.statistics?.subscriberCount)} subscribers</p>
          </div>
        </div>
        <div>
          <button className="bg-black p-2 pr-3 pl-3 rounded-full text-white mr-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
