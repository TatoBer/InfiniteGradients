import React from "react";
import "./circle.css";
import { FaRegCopy } from "react-icons/fa";

export default function Circle() {
  const getRandomColor = () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length === 6) {
      randomColor = randomColor + "1";
    }
    return randomColor;
  };

  const transfondoTransition = () =>{
    const transfondo = document.querySelector(".transfondo")
    console.log(transfondo)
    transfondo.style.backgroundImage = `linear-gradient(220.55deg, ${color1} 0%, ${color2} 100%)`
    transfondo.classList.add("on")
    setTimeout(() => {
      transfondo.classList.remove("on")
      changeHtmlBg()
    }, 1000);
  }

  const changeHtmlBg = ()=>{
    const htmll = document.querySelector("html")
    console.log(htmll)
    htmll.style.backgroundImage = `linear-gradient(220.55deg, ${color1} 0%, ${color2} 100%)`
  }

  const handleCopied = () => {
    const copied = document.querySelector(".copied");
    copied.classList.remove("off");
    setTimeout(() => {
      copied.classList.add("off");
    }, 800);
  };

  const color1 = getRandomColor();
  const color2 = getRandomColor();

  const copyGradient = () => {
    const text = `background: linear-gradient(220.55deg, ${color1} 0%, ${color2} 100%)`;
    navigator.clipboard.writeText(text);
    handleCopied();
    transfondoTransition()
  };

  return (
    <div className="gradient-container" onClick={copyGradient}>
      <div
        className="circle"
        style={{
          background: `linear-gradient(220.55deg, ${color1} 0%, ${color2} 100%)`,
        }}
      ></div>
      <h6>
        {color1} 🡆 {color2}
      </h6>
      <p>
        COPY <FaRegCopy />
      </p>
    </div>
  );
}
