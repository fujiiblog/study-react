import React from "react";

export default function HeadLine(props) {
  return (
    <div>
      <h1>{props.title}だよ</h1>
      <p>pages/{props.page}.js</p>
    </div>
  );
}
