import React, { useContext } from "react";

import styles from "./Home.module.css";
// import coder1 from "../../../Assets/Images/coder1.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import { userData } from "../../../Data/data";
import { AppContext } from "../../../Context/Context";

const Home = () => {
  const {data} = useContext(AppContext)
  return (
    <Container className={styles.Home}>
      <Row>
        <Col xs={12} lg={6} md={6}>
          <p>
            {data.user?.description1}
          </p>
          <p>
            {data.user?.description2}
          </p>
          <p>
            {data.user?.description3}
          </p>
          {data.user?.oldProfile &&<p>
            for more information look at my web profile:
            <a className={styles.mail} href={data.user.oldProfile} target={'_blank'} rel="noreferrer"> {data.user.oldProfile}</a>
           
          </p>}
          <div className="mt-5 ">
            <Button className={styles.primaryButton} variant="outline" >Download Resume</Button>
          </div>
        </Col>
        <Col xs={12} lg={6} md={6}>
          <Image className={styles.image} src={data.user.homeLogo} alt="Coder Image 1" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
