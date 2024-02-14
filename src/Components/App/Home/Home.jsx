import React from "react";
import styles from "./Home.module.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Home = ({ user }) => {
  const downloadResumeHandler = () => {
    window.open(user.downloadResumeURL, "_blank");
  };
  return (
    <Container className={styles.Home}>
      <Row>
        <Col xs={12} lg={6} md={6}>
          <p>{user?.description1}</p>
          <p>{user?.description2}</p>
          <p>{user?.description3}</p>
          {user?.oldProfile && (
            <p>
              for more information look at my web profile:
              <a
                className={styles.mail}
                href={user.oldProfile}
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                {user.oldProfile}
              </a>
            </p>
          )}
          {user?.downloadResumeURL && (
            <div className="mt-5 ">
              <Button
                className={styles.primaryButton}
                variant="outline"
                onClick={downloadResumeHandler}
              >
                Download Resume
              </Button>
            </div>
          )}
        </Col>
        <Col xs={12} lg={6} md={6}>
          <Image
            className={styles.image}
            src={user?.homeLogo}
            alt="Coder Image 1"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
