import React from "react";
import styles from "./Cards.module.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  CardText,
} from "react-bootstrap";

const SkillCards = ({
  header,
  body,
  image,
  footer,
  children,
  title,
  description,
}) => {
  return (
    <Card className={styles.card}>
      <CardHeader>{header}</CardHeader>
      <CardBody>
        <div className={styles.cardBody}>
          <div className={`px-2`}>
            <CardImg className={styles.cardImage} src={image} />
          </div>

          <div>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
          </div>
        </div>
      </CardBody>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default SkillCards;
