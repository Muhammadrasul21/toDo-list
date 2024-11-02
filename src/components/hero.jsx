import React from "react";
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { TbTicketOff } from "react-icons/tb";

const Hero = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <TiTick className="w-7 h-7 text-green-500" />
        ) : (
          <TbTicketOff className="w-7 h-7 text-gray-500" />
        )}
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <MdDeleteForever
        onClick={() => deleteTodo(id)}
        className="w-7 h-7 cursor-pointer text-red-600"
      />
    </div>
  );
};

export default Hero;
