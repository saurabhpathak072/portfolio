import React from "react";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"} className={"p-2"}>
        Prjects
      </PageTitle>
      <div></div>
    </div>
  );
};

export default Project;
