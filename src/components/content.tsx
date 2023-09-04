import "./content.css"
import grips from "./../assets/grips.png"
export default function Content() {

  return(
    <>
      <div className="introBlock">
        <div className="headText">Hi, I'm <span>Diego Cabiya.</span> Right now I'm studying <em>Computer Science</em>  at the <span>Univerity at Buffalo. </span>
          I really like <span>Web and Software Development.</span></div>
      </div>
      <div className="gradient1"><h1 className="sectionHeader">Skills</h1></div>
      <div className="skillsBlock">
        <ul className="skillText skillText--first">
          <h3 className="skillSubheader">Languages:</h3>
          <li>Python <i className="devicon-python-plain colored "/></li> 
          <li>Java <i className="devicon-java-plain java colored"/></li>
          <li>Javascript <i className="devicon-javascript-plain colored"/></li>
        </ul>
        <ul className="skillText">
          <h3 className="skillSubheader">Frameworks:</h3>
          <li>React <i className="devicon-react-original colored"/></li> 
          <li>Node <i className="devicon-nodejs-plain colored"/></li>
          <li>Express <i className="devicon-express-original exp"/></li>
        </ul>
        <ul className="skillText skillText--last">
          <h3 className="skillSubheader">Other:</h3>
          <li>Git <i className="devicon-git-plain colored"/></li> 
          <li>MongoDB <i className="devicon-mongodb-plain colored"/></li>
          <li>HTML/CSS <i className="devicon-html5-plain colored"/><i className="devicon-css3-plain colored"/></li>
        </ul>
      </div>
      <div className="gradient2"><h1 className="sectionHeader">Projects</h1></div>
      <div className="projectBlock">
        <div className="project--container">
          <img className="projectImg" src={grips}></img>
        </div>
      </div>
      <div className="gradient3"><h1 className="sectionHeader sectionHeader--higher">Contact</h1></div>
      <div className="contactBlock">
        <div className="contactBlock--container">
            <h1 className="contactLinkText" >Github</h1>
            <h1 className="contactLinkText rightAlign">Email</h1>
            <h1 className="contactLinkText">LinkedIn</h1>
        </div>
      </div>
    </>
  ) 
}