import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between">
      <input
        className="m-3"
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        className="btn btn-info m-3"
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
};

export default ChangeColor;
