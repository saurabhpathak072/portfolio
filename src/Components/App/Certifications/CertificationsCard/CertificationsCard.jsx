import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillCards from "../../../UI/Cards/SkillCards";
// import styles from "./CertificationsCard.module.css";

const CertificationsCard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <SkillCards title={"React Js"}/>
          </Col>
          <Col md={6} lg={6}>
            <SkillCards title={"React Js"}/>
          </Col>
          <Col md={6} lg={6}>
            <SkillCards title={"React Js"}/>
          </Col>
          <Col md={6} lg={6}>
            <SkillCards title={"React Js"}/>
          </Col>
          <Col md={6} lg={6}>
            <SkillCards title={"React Js"}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CertificationsCard;
