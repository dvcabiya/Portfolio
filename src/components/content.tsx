import "./content.css"
import grips from "./../assets/grips.png"
import runner from "./../assets/runner.png"
import myself from "./../assets/myself.png"



export default function Content() {

  return(
    <>
      <div className="introBlock">
        <div className="headText">Hi, I'm <span>Diego Cabiya.</span> Right now I'm studying <em>Computer Science</em>  at the <span>Univerity at Buffalo. </span>
          I really like <span>Web and Software Development.</span></div>
      </div>
      <div className="gradient1"><h1 id="#skills" className="sectionHeader">Skills</h1></div>
      <div className="skillsBlock">
        <ul className="skillText">
          <h3 className="skillSubheader">Languages:</h3>
          <li>Python <i className="devicon-python-plain "/></li> 
          <li>Java <i className="devicon-java-plain java "/></li>
          <li>Javascript <i className="devicon-javascript-plain "/></li>
        </ul>
        <ul className="skillText">
          <h3 className="skillSubheader">Frameworks:</h3>
          <li>React <i className="devicon-react-original "/></li> 
          <li>Node <i className="devicon-nodejs-plain "/></li>
          <li>Express <i className="devicon-express-original exp"/></li>
        </ul>
        <ul className="skillText">
          <h3 className="skillSubheader">Other:</h3>
          <li>Git <i className="devicon-git-plain "/></li> 
          <li>MongoDB <i className="devicon-mongodb-plain "/></li>
          <li>HTML/CSS <i className="devicon-html5-plain "/><i className="devicon-css3-plain "/></li>
        </ul>
      </div>
      <div className="gradient2"><h1 id="#projects"className="sectionHeader">Projects</h1></div>
      <div className="projectBlock">
        <div className="projectsContainer">
          <div className="projectBox">
            <img className="projectImg" src={grips} alt="Death Grips Project Image"></img>
            <h4 className="projectTitleHeader">Is Death Grips Online?</h4>
            <span className="projectBody">A website to instantly check the status of Sacramento hip-hop group Death Grips. (Github)</span>
          </div>
          <div className="projectBox">
            <img className="projectImg" src={runner} alt="Runner Project Image"></img>
            <h4 className="projectTitleHeader">Aversion - Endless Runner</h4>
            <span className="projectBody">A classic 2D runner game, coded originally in Java, ported to a Python web app. (Github)</span>
          </div>
        </div>
      </div>
      <div className="gradient3"><h1 className="sectionHeader sectionHeader--higher" id="#contact">Contact</h1></div>
      <div className="contactBlock">
        <div className="contactBlock--container">
            <a className="contactLinkText" href="https://github.com/vcabiya" >Github</a>
            <a className="contactLinkText contactLinkText--email" href="mailto:dvcabiya@gmail.com">Email</a>
            <a className="contactLinkText contactLinkText--linkedin" href="https://www.linkedin.com/in/diegovcabiya/">LinkedIn</a>
        </div>
      </div>
      <div className="gradient4"><h1 id="#about"className="sectionHeader">About</h1></div>
      <div className="aboutBlock">
        <div className="aboutCont">
          <img src={myself} alt="Diego Cabiya Looking Strange In A Mirror" className="aboutImg" />
          <h3 className="aboutText">I'm Diego, and I like very little more than CS. Ever since I first engaged with coding, I realized it was
            the only field I could practically see myself making a career in, and ever since I have frantically worked to be the best at it I can.
            I'm looking to do the most I can in college to set myself up to be as successful as possible, so expect this site to be updated frequently.
          </h3>
        </div>
      </div>
      <div className="footer">🇵🇷</div>
    </>
  ) 
}