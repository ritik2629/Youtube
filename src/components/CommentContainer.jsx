import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/Constant";
import CommentCard from "./CommentCard";

const CommentContainer = ({ videoId }) => {
  const [comment, setComment] = useState([]);
  console.log(videoId);

  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
    const json = await data.json();
    // console.log(json.items);
    setComment(json.items);
  }
  return (
    <div className=" mt-3">
    <h1 className=" font-semibold ">50 comment</h1>
      {comment.map((item) => {
        return <CommentCard info={item} key={item.id} />
      })}
    </div>
  );
};

export default CommentContainer;
