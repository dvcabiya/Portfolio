import "./navbar.css"
import React from "react";


export default function Navbar() {
  let graffBig = new Audio("src/components/graffBig.mp3");
      const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
      };
      const toAbout = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
      console.log(window.innerHeight)
      };
      const starWalk = () =>{
        graffBig.play()
      };
  return(
    <>
    <div className="navbar">
      <button onClick={toTop}>Home</button>
      <button onClick={toAbout}>About</button>
      <button onClick={starWalk}>Skills</button>
      <button onClick={toTop}>Contact</button>



    </div>
    </>
  )
}