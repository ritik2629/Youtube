import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Motivational",
    "Mountain",
    "Cricket",
    "React",
    "Kedarnath",
    "News",
    "Trailer",
    "Arijit singh",
    "IPL",
    "songs",
    "The weekend",
    "Gadgets",
    "Interview",
  ];
  return (
    <div className=" flex">
      {list.map((item) => {
        return <Button name={item} key={Math.random()} />;
      })}
    </div>
  );
};

export default ButtonList;
