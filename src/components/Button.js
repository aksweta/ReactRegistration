import React from "react";

const Button = ({ onClick, children,colour, textcolor }) => {
  return <button onClick={onClick} style={{backgroundColor: `${colour}`, color:`${textcolor}`}}>{children}</button>;
};

export default Button;
