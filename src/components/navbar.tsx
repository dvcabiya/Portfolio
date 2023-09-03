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
      const toSkills = () => {
        window.scrollTo({
            top: window.innerHeight*.74,
            behavior: "smooth",
        });
      console.log(window.innerHeight)
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
      <button onClick={toTop}>Contact</button>
      <button onClick={starWalk}>About</button>

    </div>
    </>
  )
}