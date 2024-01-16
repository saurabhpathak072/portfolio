import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { Element } from "react-scroll";
import Home from "./Components/App/Home/Home";
import HeaderTitle from "./Components/UI/HeaderTitle/HeaderTitle";
// import About from "./Components/App/About/About";
import Skills from "./Components/App/Skills/Skills";
import Timeline from "./Components/UI/Timeline/Timeline";


function App() {
  return (
    
      <Container fluid className="App p-0 m-0">   
        <header className="max-h100vh  App-header">
          <Sidebar />
        </header>
        <main  className="mainContainer">
         <HeaderTitle sticky={true}>Saurabh Pathak</HeaderTitle>
          {/* <Element id="home" name="section1" className="section">
            <Home />
          </Element> */}
          <Element id="aboutMe" name="section2" className="section">
            {/* <About/> */}
            <Home/>
          </Element>
          <Element id="skills" name="skills" className="section">
            <Skills/>
          </Element>
          <Element id="contactMe" name="section3" className="section">
            Contact Me
          </Element>
          <Element id="section4" name="section4" className="section">
            <Timeline />
          </Element>
        </main>
      </Container>
 
  );
}

export default App;
