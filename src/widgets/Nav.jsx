import React from "react";
import "../index.css";
function Navigation() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          marginBottom:"10px", 
        }}
      >
        <div style={{color:"#9c27b0}"}}>
          <h1>ANTHONY CORDOVA</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#Home">
                <h2> Home</h2>
              </a>
            </li>
            <li>
              <a href="#Project">
                <h2>Projects</h2>
              </a>
            </li>
            <li>
              <a href="#AboutMe">
                <h2>About Me</h2>
              </a>
            </li>
            <li>
              <a href="#Contact">
                <h2>Contact</h2>
              </a>
            </li>
          </ul>
        </nav>
      </div>
       
    </>
  );
}
export default Navigation;
