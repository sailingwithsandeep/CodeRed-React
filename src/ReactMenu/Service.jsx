import React from "react";
import { useEffect } from "react";

const Services = (props) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return function cleanup() {
      document.removeEventListener("click", handleClick);
    };
  });

  function handleClick() {
    console.log("hii I am called again Service useeffect");
  }

  console.log("hii I am called again Service local");

  return <h1> Hello, I am a {props.name} Page </h1>;
};

export default Services;
