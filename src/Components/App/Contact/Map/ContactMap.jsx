import React from 'react'
import Map from '../../../UI/Map/Map';
import style from './ContactMap.module.css'

const ContactMap = () => {
  const puneCenter = [18.5204,  73.8567]; // Initial map center coordinates
  return (
    <div className={`${style.container} p-2 m-2`}>
   
      <Map position={puneCenter}/>
    </div>
  )
}

export default ContactMap