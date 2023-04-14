import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/features/toggleSlice";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { YOUTUBE_SUGGESTION_SEARCH_API } from "../utils/Constant";

const Watch = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    <div className=" py-2 mx-10">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
