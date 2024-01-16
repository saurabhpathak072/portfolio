import React from "react";
import Title from "../Title/Title";
import style from "./PageTitle.module.css";

const PageTitle = ({ children, isSticky, size, ...rest }) => {
  return (
    <div className={[style.pageTitleContainer, isSticky && style.sticky ].join(' ')}>
      <div className={`${style.pageTitle} ${size} m-3 d-flex justify-content-end`}>
        <Title>{children}</Title>
      </div>
      <hr className={style.hr} />
    </div>
  );
};

export default PageTitle;
