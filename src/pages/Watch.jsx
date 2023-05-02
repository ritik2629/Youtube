import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/features/toggleSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "../components/Comments";
import LiveChat from "../components/LiveChat";
import WatchVideoDetail from "../components/WatchVideoDetail";
import VideoSuggestionContainer from "../components/VideoSuggestionContainer";
import CommentContainer from "../components/CommentContainer";

const Watch = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" mx-10 w-full">
      <div className="py-2 flex w-full">
        <div className="">
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}${"?autoplay=1"}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WatchVideoDetail videoId={searchParams.get("v")} />
          {/* <Comments /> */}
          <CommentContainer videoId={searchParams.get("v")}/>
        </div>
        <div className=" w-full">
          <LiveChat />
          <VideoSuggestionContainer videoId={searchParams.get("v")} />
        </div>
      </div>
    </div>
  );
};

export default Watch;
