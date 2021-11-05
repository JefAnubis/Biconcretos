import React from "react";

import NavBar from "./Components/NavBar.js";
import  Carousel from "./Components/Carousel.js";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <>
    <NavBar/>
    <div className="p-5">
    <Carousel/>
    </div>
    </>
  );
}
