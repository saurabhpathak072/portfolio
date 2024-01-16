import React from "react";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"} className={"p-2"}>
        Contact Me
      </PageTitle>
      <div></div>
    </div>
  );
};

export default Contact;
