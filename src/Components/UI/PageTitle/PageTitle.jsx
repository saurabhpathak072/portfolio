import React, { useContext } from "react";
import { AppContext } from "../../../Context/Context";
import Title from "../Title/Title";
import style from "./PageTitle.module.css";

const PageTitle = ({ children, isSticky, size, isHeader, ...rest }) => {

  const {isDesktop} = useContext(AppContext);
  const showPageheader = isDesktop && isHeader;
  return (
    <div className={[style.pageTitleContainer, isSticky && style.sticky ].join(' ')}>
      <div className={`${style.pageTitle} ${size} m-3 d-flex ${showPageheader ? "":"justify-content-end"}`}>
        <Title isHeader={showPageheader}>{children}</Title>
      </div>
      <hr className={style.hr} />
    </div>
  );
};

export default PageTitle;
