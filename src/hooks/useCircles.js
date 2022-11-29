import { useState } from "react";

const getRandomColor = () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor.length === 6) {
    randomColor = randomColor + "1";
  }
  return randomColor;
};

const useCircles = () => {
  const [circleArray, setCircleArray] = useState([
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
    { color1: getRandomColor(), color2: getRandomColor() },
  ]);

  const reloadArray = () => {
    setCircleArray([
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
      { color1: getRandomColor(), color2: getRandomColor() },
    ]);
  };

  return { circleArray, reloadArray };
};

export default useCircles;
