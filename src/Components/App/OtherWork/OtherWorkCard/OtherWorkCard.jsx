import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { otherWorkList } from '../../../../Data/data';
import SkillCards from '../../../UI/Cards/SkillCards';
import styles from './OtherWorkCard.module.css';

const OtherWorkCard = () => {
    const project = otherWorkList.map((prj, index) => {
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
}

export default OtherWorkCard