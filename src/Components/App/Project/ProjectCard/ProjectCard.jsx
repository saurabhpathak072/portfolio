import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { projectList } from "../../../../Data/data";
import SkillCards from "../../../UI/Cards/SkillCards";
import { Icon } from "../../../UI/Icon/Icon";
// import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  const project = projectList.map((prj, index) => {
    return (
      <Col key={index} lg={6}>
        <SkillCards description={prj.description} url={prj.url} title={prj.title} subtitle={prj.tenure} image={prj.logoImg}/>
      </Col>
    );
  });
  return (
    <Container>
      <Row>{project}</Row>
    </Container>
  );
};

export default ProjectCard;
