import React from "react";
import { Container } from "react-bootstrap";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Project = () => {
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"} className={"p-2"}>
        Prjects
      </PageTitle>
      <div>
        <Container>
          <ProjectCard/>
        </Container>
      </div>
    </div>
  );
};

export default Project;
