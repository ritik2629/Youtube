import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "News",
    "Motivational",
    "Hiking",
    "Javascript",
    "Mountain",
    "Cricket",
    "React",
    "Kedarnath",
    "News",
    "Atif Aslam",
    "Trailer",
    "Arijit singh",
    "IPL",
    "songs",
    "Gadgets",
    "Interview",
    "Technology",
    "Iphone",
    "Spotify"
  ];
  return (
    <div className=" w-full  overflow-x-scroll  bg-white flex text-sm ">
      {list.map((item) => {
        return <Button name={item} key={Math.random()} />;
      })}
    </div>
  );
};

export default ButtonList;
