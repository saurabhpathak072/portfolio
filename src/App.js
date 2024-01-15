import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";

function App() {
  return (
    <Container fluid className="App p-0 m-0">
      <Row className=" p-0 m-0">
        <Col sm={3}  lg={4}  className="  p-0 m-0" >
          <header className="max-h100vh  App-header">
            <Sidebar />
          </header>
        </Col>
        <Col className=" p-0 m-0">
          <main>
            <Element id="home" name="section1" className="section">
              Home
            </Element>
            <Element id="aboutMe" name="section2" className="section">
              About Me
            </Element>
            <Element id="contactMe" name="section3" className="section">
              Contact Me
            </Element>
            <Element id="section4" name="section4" className="section">
              Section 4
            </Element>
          </main>
        </Col>
      </Row>
      {/* <Row>
        <footer>Footer</footer>
      </Row> */}
    </Container>
  );
}

export default App;
