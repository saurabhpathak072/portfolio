import React from "react";

import styles from "./Home.module.css";
import coder1 from "../../../Assets/Images/coder1.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { userData } from "../../../Data/data";

const Home = () => {
  return (
    <Container className={styles.Home}>
      <Row>
        <Col xs={12} lg={6} md={6}>
          <p>
            {userData.description1}
          </p>
          <p>
            {userData.description2}
          </p>
          <p>
            {userData.description3}
          </p>
          {userData?.oldProfile &&<p>
            for more information look at my web profile:
            <a className={styles.mail} href={userData.oldProfile} target={'_blank'} rel="noreferrer"> https://saurabhpathak072-f8a1f.web.app/</a>
           
          </p>}
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
