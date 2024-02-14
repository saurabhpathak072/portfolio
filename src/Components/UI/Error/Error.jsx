import React from 'react';
import styles from './Error.module.css'

const Error = ({children}) => {
  return (
    <div className={`${styles.errorContainer}`}>

        <div className={`${styles.errorMessage}`}>{children}</div>
    </div>
  )
}

export default Error