import React, { useEffect, useState } from "react";
import { RELATED_VIDEO_API } from "../utils/Constant";
import VideoSuggestionCard from "./VideoSuggestionCard";
import { Link } from "react-router-dom";

const VideoSuggestionContainer = ({ videoId }) => {
  const [relatedVideo, setRelatedVideo] = useState([]);
  //   console.log(relatedVideo);

  useEffect(() => {
    getVideoRelatedSuggestion();
  }, []);

  async function getVideoRelatedSuggestion() {
    const data = await fetch(RELATED_VIDEO_API + videoId);
    const json = await data.json();
    // console.log(json.items);
    setRelatedVideo(json.items);
  }

  return (
    <div className=" py-3 ml-3">
      {relatedVideo.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id.videoId}>
            <VideoSuggestionCard info={item} key={item.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoSuggestionContainer;
