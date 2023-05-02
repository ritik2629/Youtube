import React from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
  return (
    <div>
      <Link to={`/Filter?search_query=${props.name}`}>
        <button className=" p-2 m-2 rounded-lg bg-gray-300 hover:bg-black hover:text-white w-24">
          {props.name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
