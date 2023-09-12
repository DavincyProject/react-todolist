import React from "react";

export default function Button(props) {
  const { className, text } = props;

  Button.defaultProps = {
    className: "bg-blue-500 rounded mt-2 text-white font-medium w-64 h-8",
  };

  return <button className={className}>{text}</button>;
}
