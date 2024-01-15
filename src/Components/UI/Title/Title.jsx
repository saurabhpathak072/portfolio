import React from 'react'
import style from './Title.module.css'

const Title = ({children}) => {
  return (
    <div className={style.title}>{children}</div>
  )
}

export default Title