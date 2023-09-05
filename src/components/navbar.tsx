import "./navbar.css"
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const graffBig = new Audio("src/assets/graffBig.mp3");
  graffBig.volume=.2;

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY < lastScrollY) { 
        setShow(false); 
      } else { 
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

      const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
      };
      function toSkills() {
        let section = document.getElementById("#skills")
        let bodyRect = document.body.getBoundingClientRect()
        if (!section) return;
        let goTo = bodyRect.top - section.getBoundingClientRect().top
        goTo = Math.abs(goTo)- 50;
        window.scrollTo({
            top: goTo,
            behavior: "smooth",
          });
      };
      function toProjects() {
        let section = document.getElementById("#projects")
        let bodyRect = document.body.getBoundingClientRect()
        if (!section) return;
        let goTo = bodyRect.top - section.getBoundingClientRect().top
        goTo = Math.abs(goTo)- 50;
        window.scrollTo({
            top: goTo,
            behavior: "smooth",
          });
      };
      function toContact() {
        let section = document.getElementById("#contact")
        let bodyRect = document.body.getBoundingClientRect()
        if (!section) return;
        let goTo = bodyRect.top - section.getBoundingClientRect().top
        goTo = Math.abs(goTo)- 50;
        window.scrollTo({
            top: goTo,
            behavior: "smooth",
          });
      };
      
      const starWalk = () => {
        if (graffBig.paused) {
          graffBig.play();
        } else {
          graffBig.currentTime = 0
        } 
      }

      
      
  return(
    <>
    <div className={`navbar ${show && 'hidden'}`}>
      <button onClick={toTop}>Home</button>
      <button onClick={toSkills}>Skills</button>
      <button onClick={toProjects}>Projects</button>
      <button onClick={toContact}>Contact</button>
      <button onClick={toContact}>About</button>


    </div>
    </>
  )
}