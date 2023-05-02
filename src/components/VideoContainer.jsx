import axios from "axios";
import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/Constant";
import VideoCard, { AdvideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  function getVideo() {
    axios.get(YOUTUBE_API_KEY).then((res) => {
      console.log(res.data);
      setVideo(res.data.items);
    });
  }

  return (
    <div className=" flex flex-wrap">
      {video[0] && <AdvideoCard info={video[0]}/>}
      {video.map((item) => {
        return (
          <Link to={`/watch/?v=${item.id}`} key={item.id}>
            <VideoCard info={item} />;
          </Link>
        );
      })}
    </div>
  
  );
};

export default VideoContainer;
