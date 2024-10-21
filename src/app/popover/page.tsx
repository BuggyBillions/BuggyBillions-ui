"use client";
import React from "react";
import Popover from "../../components/popovers/Popovers"; // Adjust the path as needed
import './pop.css'
const App = () => {
  return (
    <div className="container-popover">
      {/* <Popover content={<div>This is the popover content!</div>} position="top">
        Click me (Top)
      </Popover> */}

      <Popover
        content={<div>This is the popover content!</div>}
        position="left"
      >
        Click me 
      </Popover>
  
    </div>
  );
};

export default App;
