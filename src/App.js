import "./App.css";
import Sidebar from "./Components/App/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { Element } from "react-scroll";
import Home from "./Components/App/Home/Home";
import HeaderTitle from "./Components/UI/HeaderTitle/HeaderTitle";
import Skills from "./Components/App/Skills/Skills";
import Experience from "./Components/App/Experience/Experience";
import Education from "./Components/App/Education/Education";
import Feedback from "./Components/App/Feedback/Feedback";
import Contact from "./Components/App/Contact/Contact";
import Project from "./Components/App/Project/Project";
import OtherWork from "./Components/App/OtherWork/OtherWork";
import Certifications from "./Components/App/Certifications/Certifications";


function App() {
  return (
    
      <Container fluid className="App p-0 m-0">   
        <header className="max-h100vh  App-header">
          <Sidebar />
        </header>
        <main  className="mainContainer">
         <HeaderTitle sticky={true}>Saurabh Pathak</HeaderTitle>
          <Element id="aboutMe" name="section2" className="section">
            <Home/>
          </Element>
          <Element id="skills" name="skills" className="section">
            <Skills/>
          </Element>
          <Element id="experience" name="experience" className="section">
           <Experience/>
          </Element>
          <Element id="education" name="education" className="section">
           <Education />
          </Element>
          <Element id="feedback" name="feedback" className="section">
           <Feedback />
          </Element>
          <Element id="contactMe" name="section3" className="section">
            <Contact/>
          </Element>
          <Element id="projects" name="projects" className="section">
            <Project/>
          </Element>
          <Element id="certifications" name="certifications" className="section">
            <Certifications />
          </Element>
          <Element id="otherwork" name="otherwork" className="section">
            <OtherWork/>
          </Element>
        </main>
      </Container>
 
  );
}

export default App;
