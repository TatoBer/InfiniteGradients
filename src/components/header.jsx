import React from "react";
import "./header.css";
import { IoMdInfinite } from 'react-icons/io';

export default function Header() {
  return (
    <header>
      <h1>INFINITY GRADIENTS <IoMdInfinite/></h1>
      <p>
        Discover your favorite gradient by trying endless combinations of random
        colors.
      </p>
    </header>
  );
}
