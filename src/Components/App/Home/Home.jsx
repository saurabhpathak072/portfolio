import React from "react";

import styles from "./Home.module.css";
import coder1 from "../../../Assets/Images/coder1.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";


const Home = () => {
 
  return (
    <Container className={styles.Home}>
      
      <Row>
        <Col xs={12} lg={6} md={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae
          accusantium minus. Harum labore molestiae deleniti magni libero, illo
          cupiditate odio hic consequatur voluptate nulla est, nesciunt nisi.
          Nisi, accusantium.
        </Col>
        <Col xs={12} lg={6} md={6}>
          <Image className={styles.image} src={coder1} alt="Coder Image 1" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
