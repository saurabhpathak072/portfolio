import React from "react";
import SkillCards from "../../UI/Cards/SkillCards";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Skills.module.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import { skillsSet } from "../../../Data/data";

const Skills = () => {
  const skillsContainer = skillsSet.map((sk, index) => {
    return (
      <Col key={index} md={4} lg={3} sm={6} xs={12} className={"p-2 "}>
        <SkillCards image={sk.image} title={sk.title} />
      </Col>
    );
  });
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"}>Skills</PageTitle>
      <div>
        <Container>
          <Row>{skillsContainer}</Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
