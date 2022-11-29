import React from "react";
import Circle from "./components/circle";
import Copied from "./components/copied";
import End from "./components/end";
import Header from "./components/header";
import Refresh from "./components/refresh";
import Transfondo from "./components/transfondo";
import useCircles from "./hooks/useCircles";

export default function App() {

  const {circleArray, reloadArray} = useCircles()

  return (
    <>
      <Header />
      <hr />
      <Refresh onClick={reloadArray} />
      <section className="gradients">
        {circleArray.map(circ=> {return <Circle color1={circ.color1} color2={circ.color2} />})}
      </section>
      <End />
      <Copied />
      <Transfondo />
    </>
  );
}
