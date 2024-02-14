import React from "react";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Feedback.module.css";
import { feedbackData } from "../../../Data/data";
import { Container, Row } from "react-bootstrap";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedback = () => {
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"} className={"p-2"}>
        Feedback
      </PageTitle>
      <div>
        <Container>
          <Row>
            {feedbackData.map((feed, index) => {
              return <FeedbackCard feed={feed} key={index}/>;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Feedback;
