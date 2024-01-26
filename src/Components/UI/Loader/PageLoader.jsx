import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from './PageLoader.module.css'

const PageLoader = () => {
    console.log('styles.wrapperClass',styles.wrapperClass);
  return (
    <div className={styles.wrapperClass}>

        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          strokeColor="var(--header-primary-color)"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass={styles.wrapperClass}
        />
    </div>
  );
};

export default PageLoader;
