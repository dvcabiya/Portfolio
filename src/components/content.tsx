import "./content.css"
export default function Content() {

  return(
    <>
      <div className="topBlock">
        <div className="headText">Hi, I'm <span>Diego Cabiya.</span> Right now I'm studying <em>Computer Science</em>  at the <span>Univerity at Buffalo. </span>
          I really like <span>Web and Software Development.</span></div>
      </div>
      <div className="gradient1"><h1>Skills</h1></div>
      <div className="secondBlock">
        <ul className="skillText skillText--first">
          <h3 className="skillSubheader">Languages:</h3>
          <li>Python <i className="devicon-python-plain "/></li> 
          <li>Java <i className="devicon-java-plain java"/></li>
          <li>Javascript <i className="devicon-javascript-plain"/></li>
        </ul>
        <ul className="skillText">
          <h3 className="skillSubheader">Frameworks:</h3>
          <li>React <i className="devicon-react-original"/></li> 
          <li>Node <i className="devicon-nodejs-plain"/></li>
          <li>Express <i className="devicon-express-original exp"/></li>
        </ul>
        <ul className="skillText skillText--last">
          <h3 className="skillSubheader">Other:</h3>
          <li>Git <i className="devicon-git-plain"/></li> 
          <li>MongoDB <i className="devicon-mongodb-plain"/></li>
          <li>HTML/CSS <i className="devicon-html5-plain"/><i className="devicon-css3-plain"/></li>
        </ul>
      </div>
    </>
  ) 
}