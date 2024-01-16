import React from "react";
import style from "./Timeline.module.css";
import logo from '../../../Assets/Images/logo1.png'

const Timeline = () => {
  return (
    <div className={style.timeline}>
      <div className={[style.container, style.leftContainer].join(' ')}>
        <img src={logo} alt="Company 1"  />
        <div className={style.textBox}>
          <h2>Alphabet Inc.</h2>
          <small>2018-2019</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nihil ab ex nisi accusantium doloremque, voluptatibus dolor
          </p>
          <span className={style.leftContainerArrow}></span>
        </div>
      </div>

      <div className={[style.container, style.rightContainer].join(' ')}>
      <img src={logo} alt="Company 1"  />
        <div className={style.textBox}>
          <h2>Alphabet Inc.</h2>
          <small>2018-2019</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nihil ab ex nisi accusantium doloremque, voluptatibus dolor
          </p>
          <span className={style.rightContainerArrow}></span>
        </div>
      </div>

      <div className={[style.container, style.leftContainer].join(' ')}>
      <img src={logo} alt="Company 1"  />
        <div className={style.textBox}>
          <h2>Alphabet Inc.</h2>
          <small>2018-2019</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nihil ab ex nisi accusantium doloremque, voluptatibus dolor
          </p>
          <span className={style.leftContainerArrow}></span>
        </div>
      </div>

      <div className={[style.container, style.rightContainer].join(' ')}>
      <img src={logo} alt="Company 1"  />
        <div className={style.textBox}>
          <h2>Alphabet Inc.</h2>
          <small>2018-2019</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nihil ab ex nisi accusantium doloremque, voluptatibus dolor
          </p>
          <span className={style.rightContainerArrow}></span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
