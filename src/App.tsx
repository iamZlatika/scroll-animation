import React, { useEffect, useRef, useState } from "react";
import Box from "./components/box/Box";

const App = () => {
  const [displayedBoxes, setDisplayedBoxes] = useState(~~(((window.innerHeight / 5) * 4) / 200));

  const inputRef = useRef();

  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < displayedBoxes - 1; i++) {
      boxes.push(<Box show={true} key={i} />);
    }
    boxes.push(<Box show={false} key={displayedBoxes - 1} />);
    return boxes;
  };
  const onScroll = () => {
    setDisplayedBoxes(~~((-inputRef.current.getBoundingClientRect().y - 100 + (window.innerHeight / 5) * 4) / 200 + 2));
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={inputRef}>
      <h1>Scroll to see the animation</h1>
      {generateBoxes()}
    </div>
  );
};

export default App;
