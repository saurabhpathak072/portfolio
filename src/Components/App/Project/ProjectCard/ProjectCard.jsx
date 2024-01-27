import React, { useContext } from "react";
import {  Col, Container, Row } from "react-bootstrap";
// import { projectList } from "../../../../Data/data";
import SkillCards from "../../../UI/Cards/SkillCards";
import styles from "./ProjectCard.module.css";
import { AppContext } from "../../../../Context/Context";

const ProjectCard = ({projectList}) => {
  const {data} = useContext(AppContext)
  const project = projectList.map((prj, index) => {
    return (
      <Col className={`py-2 my-2 ${styles.ProjectCard}`} key={index} lg={6}>
  
        <SkillCards
          skills={prj.skills}
          description={prj.description}
          url={prj.url}
          header={prj.title}
          subtitle={prj.subtitle}
          tenure={prj.tenure}
          image={prj.logoImg}
        >
          
        </SkillCards>
        
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
