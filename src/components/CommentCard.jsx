import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { dateDiff } from "../utils/helper";

const CommentCard = ({info}) => {
  console.log(info)
    const {snippet}=info
    const {topLevelComment}=snippet
  return (
    <div className=" py-3">
      <div className=" flex items-center">
        <img
          src={topLevelComment.snippet.authorProfileImageUrl}
          alt=""
          className=" rounded-full h-10 mr-2 ml-3"
        />
        <h1 className=" mr-2">{topLevelComment.snippet.authorDisplayName}</h1>
        <p className=" text-sm text-gray-500">{dateDiff(topLevelComment.snippet.publishedAt)}</p>
      </div>
      <div>
        <h1 className=" ml-12 mb-2">
         {topLevelComment.snippet.textDisplay}
        </h1>
      </div>
      <div className=" flex ml-12 gap-3 text-xl items-center text-gray-600">
        <div className=" flex items-center gap-1">
        <BiLike/>
        <h1 className=" text-sm">{topLevelComment.snippet.likeCount}</h1>
        </div>
        <BiDislike />
        <h1 className=" text-sm text-black">Reply</h1>
      </div>
    </div>
  );
};

export default CommentCard;
