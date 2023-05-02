import { useEffect, useState } from "react";
import { CHANNEL_DETAILS_API, VIDEO_DESCRIPTION } from "../utils/Constant";
import ChannelDetail from "./ChannelDetail";
import ChannelDescription from "./ChannelDescription";
import WatchButton from "./WatchButton";

const WatchVideoDetail = ({videoId}) => {
  const [channelDetails,setChannelDetails]=useState()
  const [videoDetails,setVideoDetails]=useState()

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  useEffect(() => {
    if (videoDetails !== undefined)
        getChannelDetails();
}, [videoDetails]);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DESCRIPTION + videoId);
    const json = await data.json();
    // console.log(json.items[0]);
    setVideoDetails(json.items[0])
  };

  const getChannelDetails= async()=>{
    const data = await fetch(CHANNEL_DETAILS_API + videoDetails?.snippet?.channelId)
    const json = await data.json();
    // console.log(json.items[0])
    setChannelDetails(json.items[0])
  }

  if (videoDetails === undefined) return;

  const {snippet}=videoDetails
  const {title}=snippet
  
  return (
    <div className=" rounded-lg">
     <ChannelDetail channelDetails={channelDetails} title={title}/>
     <WatchButton videoDetails={videoDetails}/>
     <ChannelDescription videoDetails={videoDetails} />
    </div>
  );
};

export default WatchVideoDetail;
