import React from "react";

interface BoxProps {
  show: boolean;
}
const Box: React.FC<BoxProps> = ({ show }) => {
  return (
    <div className={`box ${show ? "show" : ""}`}>
      <h2>Content</h2>
    </div>
  );
};

export default Box;
