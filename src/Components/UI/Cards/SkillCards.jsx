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
  CardSubtitle,
} from "react-bootstrap";
import { Icon } from "../Icon/Icon";

const SkillCards = ({
  header,
  body,
  image,
  footer,
  children,
  title,
  description,
  subtitle,
  url
}) => {
  // const handleClick=()=>{
  //   console.log('clicked');
  //   window.open(url,'sharer')
  // }
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>{header}</CardHeader>
      <CardBody className={styles.cardBodyContainer}>
        <div className={styles.cardBody}>
          <div className={`px-2`}>
            <CardImg className={styles.cardImage} src={image} />
          </div>
          <div>
            <CardTitle >{title} </CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            {/* <div><small>{}</small></div> */}
            <CardText>{description}</CardText>
          </div>
        </div>
      </CardBody>
      <CardFooter className={styles.cardFooter}>{footer}</CardFooter>
    </Card>
  );
};

export default SkillCards;
