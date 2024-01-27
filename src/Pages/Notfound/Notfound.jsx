import React from 'react';
import styles from './Notfound.module.css'
import Error from '../../Components/UI/Error/Error';

const Notfound = () => {
  return (
    <div className={`${styles.container}`} >
        <Error>
            <div>Please Check your given URL</div>
            <div>Reason: User-id may not be given</div>
        </Error>
    </div>
  )
}

export default Notfound