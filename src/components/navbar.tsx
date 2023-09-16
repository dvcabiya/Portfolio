import "./navbar.css"
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      function toSection(title: string) {
        let section = document.getElementById(`#${title}`)
        let bodyRect = document.body.getBoundingClientRect()
        if (!section) return;
        let goTo = bodyRect.top - section.getBoundingClientRect().top
        goTo = Math.abs(goTo)- 50;
        window.scrollTo({
            top: goTo,
            behavior: "smooth",
          });
      };
      

      
      
  return(
    <>
    <div className={`navbar ${show && 'hidden'}`}>
      <button onClick={toTop}>Home</button>
      <button onClick={() => toSection("skills")}>Skills</button>
      <button onClick={() => toSection("projects")}>Projects</button>
      <button onClick={() => toSection("contact")}>Contact</button>
      <button onClick={() => toSection("about")}>About</button>


    </div>
    </>
  )
}