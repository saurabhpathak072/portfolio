import React from "react";
import PageTitle from "../../UI/PageTitle/PageTitle";
import style from "./About.module.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className={style.container}>
      <PageTitle size={"h3"}>About</PageTitle>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam
          quidem iusto animi, harum explicabo iure eveniet hic modi quia
          voluptas sapiente. At eius porro vitae, optio temporibus numquam
          omnis!
        </Col>
      </Row>
    </Container>
  );
};

export default About;
