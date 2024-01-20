import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "../../UI/PageTitle/PageTitle";
import styles from "./Contact.module.css";
import ContactMap from "./Map/ContactMap";
import {Icon} from '../../UI/Icon/Icon'

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageTitle size={"h2"} className={"p-2"}>
        Contact Me
      </PageTitle>
      <Container>
        <Row>
          <Col sm={12} md={7}>

              <Row className="py-2 my-1">
                <Col xs={4} md={4} lg={6} sm={6}>Mobile Number</Col>
                <Col className={styles.email}><a href="tel:+917840937715" >: 7840937715</a></Col>
              </Row>
              <Row className="py-2 my-1">
                <Col xs={4} md={4} lg={6} sm={6}>Email</Col>
                <Col className={styles.email}><a href="mailto:saurabhpathak072@gmail.com">: saurabhpathak072@gmail.com</a></Col>
              </Row>
              <Row className="py-2 my-1">
                <Col xs={4} md={6} sm={6}>Current Location</Col>
                <Col>: Pune, India</Col>
              </Row>
             <Row className="justify-content-around mt-3">
              <Col className={`${styles.email}`} xs={1} sm={2}><a href="https://www.linkedin.com/in/saurabh-pathak-35b2b0190/"  target={"_blank"} rel="noreferrer"><Icon iconName={"Linkedin"}/></a></Col>
              <Col className={`${styles.email}`} xs={1} sm={2}><a href="https://github.com/saurabhpathak072" target={"_blank"} rel="noreferrer"><Icon iconName={"Github"}/></a></Col>
              <Col className={`${styles.email}`} xs={1} sm={2}><a href="mailto:saurabhspathak072@gmail.com" target={"_blank"} rel="noreferrer"><Icon iconName={"Envelope"}/></a></Col>
              <Col className={`${styles.email}`} xs={1} sm={2}><a href="https://saurabhpathak072-f8a1f.web.app/" target={"_blank"} rel="noreferrer"><Icon iconName={"Person"}/></a></Col>
             </Row>
          </Col>
          <Col sm={12} md={5}>
            <ContactMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
