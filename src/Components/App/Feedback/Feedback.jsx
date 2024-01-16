import React from "react";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"} className={"p-2"}>
        Feedback
      </PageTitle>
      <div></div>
    </div>
  );
};

export default Feedback;
