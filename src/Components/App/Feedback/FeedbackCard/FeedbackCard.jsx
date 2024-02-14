import React from 'react'
import { Col } from "react-bootstrap";
import SkillCards from '../../../UI/Cards/SkillCards';
// import { certificateList } from "../../../../Data/data";
// import styles from "./CertificationsCard.module.css";

const FeedbackCard = ({feed,index}) => {
  return (
    <Col className={`py-2 my-2 `} key={index} md={6} lg={6}>
  
    <SkillCards
      skills={feed.skills}
      description={feed.description}
      url={feed.url}
      title={feed.title}
      subtitle={feed.subtitle}
      iframeURL={feed.iframe}
      tenure={feed.tenure}
      image={feed.url}
    >
      
    </SkillCards>
    
  </Col>
  )
}

export default FeedbackCard;




