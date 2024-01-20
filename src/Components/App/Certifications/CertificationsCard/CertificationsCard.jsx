import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { certificateList } from "../../../../Data/data";
import SkillCards from "../../../UI/Cards/SkillCards";
// import styles from "./CertificationsCard.module.css";

const CertificationsCard = () => {
  const certificationList = certificateList.map((cert,index)=>{
    return (
      <Col className={`py-2 my-2 `} key={index} md={6} lg={6}>
  
        <SkillCards
          skills={cert.skills}
          description={cert.description}
          url={cert.url}
          title={cert.title}
          subtitle={cert.subtitle}
  iframeURL={cert.iframe}
          tenure={cert.tenure}
          image={cert.logoImg}
        >
          
        </SkillCards>
        
      </Col>
    );
  })
  return (
    <div>
      <Container>
        <Row>
          {certificationList}
        </Row>
      </Container>
    </div>
  );
};

export default CertificationsCard;
