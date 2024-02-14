import React, { useEffect } from 'react';
import styles from './Notfound.module.css'
import Error from '../../Components/UI/Error/Error';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redTimeout =  setTimeout(() => {
      return  navigate("/saurabh-pathak");
    }, 1000);
   
    return () => {
      return clearTimeout(redTimeout);
    }
  }, [navigate])
  
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