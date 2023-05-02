import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentData = [
  {
    name: "Ritik Raj",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
    reply: [
      {
        name: "Ritik Raj",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
        reply: [
          {
            name: "Ritik Raj",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
            reply: [
              {
                name: "Ritik Raj",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
                reply: [
                  {
                    name: "Ritik Raj",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ritik Raj",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
    reply: [],
  },
  {
    name: "Ritik Raj",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
    reply: [],
  },
  {
    name: "Ritik Raj",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
    reply: [],
  },
  {
    name: "Ritik Raj",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
    reply: [],
  },
  {
    name: "Ritik Raj",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates eveniet suscipit",
    reply: [],
  },
];

export const UserComment = ({ data }) => {
  const { text, name } = data;

  return (
    <div className=" bg-gray-100 rounded-md m-2 py-2 mx-3 flex">
      <div className=" text-2xl p-2">
        <FaUserCircle />
      </div>
      <div>
        <p className=" font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return (
    <div  key={Math.random()}>
      {comments.map((item) => {
        return (
          <>
            <UserComment data={item}   key={Math.random()}/>
            <div className=" border-l-2 border-black pl-2">
              <CommentList comments={item.reply} key={Math.random()} />
            </div>
          </>
        );
      })} 
    </div>
  );
};

const Comments = () => {
  return (
    <div className=" mx-3 py-2">
      <h1>comments</h1>
      {/* <UserComment data={commentData[0]} /> */}
      <CommentList comments={commentData}  key={Math.random()} />
    </div>
  );
};

export default Comments;
