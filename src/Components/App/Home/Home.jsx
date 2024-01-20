import React from "react";

import styles from "./Home.module.css";
import coder1 from "../../../Assets/Images/coder1.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className={styles.Home}>
      <Row>
        <Col xs={12} lg={6} md={6}>
          <p>
            I have 4 years of experience with frontend and various web
            technologies, always ready to learn something new and try to explore
            more. I am gaining knowledge on the backend in Node js to become a
            full-stack developer.
          </p>
          <p>
            I have graduated as a Bachelor of Information Technology from
            SGGSIE&T, Nanded, Maharashtra. My strength lies in web development,
            React JS, React-Native, javascript, jQuery, and bootstrap.
          </p>
          <p>
            The crossover between design and programming has always been an
            interesting topic. I am always trying to learn new technologies and
            explore them.
          </p>
          <p>
            for more information look at my web profile:
            <a className={styles.mail} href=" https://saurabhpathak072-f8a1f.web.app/" target={'_blank'}> https://saurabhpathak072-f8a1f.web.app/</a>
           
          </p>
          <div className="mt-5 ">
            <Button className={styles.primaryButton} variant="outline" >Download Resume</Button>
          </div>
        </Col>
        <Col xs={12} lg={6} md={6}>
          <Image className={styles.image} src={coder1} alt="Coder Image 1" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
