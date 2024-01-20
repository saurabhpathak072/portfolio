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
  Button,
  Ratio,
} from "react-bootstrap";
import { Icon } from "../Icon/Icon";

const SkillCards = ({
  header,
  body,
  image,
  tenure,
  children,
  title,
  description,
  subtitle,
  subtitle2,
  url,
  skills,
  iframeURL,
}) => {
  const handleClick=()=>{
    console.log('clicked');
    window.open(url,'sharer')
  }
  let footer = <></>;

  if (skills && Array.isArray(skills)) {
    footer = (
      <ul className="d-flex justify-content-around flex-wrap">
        {skills.map((sk, index) => {
          return <li key={index}>{sk}</li>;
        })}
      </ul>
    );
  }

  return (
    <Card className={styles.card}>
      <CardHeader className={`${styles.cardHeader} h4`}>{header}</CardHeader>
      <CardBody className={styles.cardBodyContainer}>
        <div className={styles.cardBody}>
          {image && (
            <div className={`px-2`}>
              <CardImg className={styles.cardImage} src={image} />
            </div>
          )}
          <div className={description && styles.description}>
            <CardTitle>{title} </CardTitle>
            {subtitle && (
              <CardSubtitle className="my-1 py-1">{subtitle}</CardSubtitle>
            )}
            {subtitle2 && (
              <CardSubtitle className="my-1 py-1">{subtitle2}</CardSubtitle>
            )}
            {tenure && <CardSubtitle>{tenure}</CardSubtitle>}
            {description && (
              <CardText className="my-2 py-2">{description}</CardText>
            )}
            {url && (
              <div className={styles.Buttoncontainer}>
                <Button variant="outline" onClick={handleClick} className={styles.btn}>
                  {url} <Icon iconName={"Link"} />
                </Button>
              </div>
            )}
            {children}
            {iframeURL && (
              <div style={{ width: "100%", height: "auto" }}>
                <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src={url} />
                </Ratio>
              </div>
            )}
          </div>
        </div>
        {/* <Button className={styles.btn}>21</Button> */}
      </CardBody>

      <CardFooter className={styles.cardFooter}>{footer}</CardFooter>
    </Card>
  );
};

export default SkillCards;
