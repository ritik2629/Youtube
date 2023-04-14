import React from "react";

const VideoCard = ({ info }) => {
  
  const { snippet,statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  return (
    <div className=" m-3 w-96 h-[450px] shadow-md p-3 rounded-lg cursor-pointer ">
      <img src={thumbnails.high.url} alt={title} className=" rounded-lg" />
      <h1 className=" font-semibold">{title}</h1>
      <p className=" text-gray-500">{channelTitle}</p>
      <p>{statistics.viewCount}</p>
      <p>{publishedAt}</p>
    </div>
  );
};

export const AdvideoCard=({info})=>{
  return(
    <div className=" border border-red-400">
      <VideoCard   info={info}/>
    </div>
  )
}  //!this is higher order component

export default VideoCard;
