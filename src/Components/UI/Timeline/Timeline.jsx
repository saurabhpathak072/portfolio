import React from "react";
import style from "./Timeline.module.css";
import { useInView } from "react-intersection-observer";

const Timeline = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  let content = <></>;
  if (data && Array.isArray(data)) {
    content = data.map((dt, index) => {
      const isEven = index % 2 === 0 ? true : false;
      return (
        <div
          key={index}
          className={[
            style.container,
            inView && style.containerAnimation,
            isEven ? style.rightContainer : style.leftContainer,
          ].join(" ")}
        >
          <img src={dt.logoImg} alt="Company 1" />
          <div className={style.textBox}>
            <h4>{dt.title}</h4>
            <div className="">
              {dt.subtitle}
            </div>
            <small>{dt.tenure}</small>
            <p>{dt.description}</p>
            <span
              className={
                isEven ? style.rightContainerArrow : style.leftContainerArrow
              }
            ></span>
          </div>
        </div>
      );
    });
  }
  return (
    <div
      ref={ref}
      className={[style.timeline, inView && style.timelineAnimation].join(" ")}
    >
      {content}
    </div>
  );
};

export default Timeline;
