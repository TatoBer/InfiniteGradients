import React from "react";
import { useState } from "react";
import Circle from "./components/circle";
import Copied from "./components/copied";
import End from "./components/end";
import Header from "./components/header";
import Refresh from "./components/refresh";
import Transfondo from "./components/transfondo";

export default function App() {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 1);
  };

  return (
    <>
      <Header />
      <hr />
      <Refresh onClick={handleReload} />
      <section className="gradients">
        {!reload ? (
          <>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </>
        ) : (
          <>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </>
        )}
      </section>
      <End />
      <Copied />
      <Transfondo />
    </>
  );
}
