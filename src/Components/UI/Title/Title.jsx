import React from 'react'
import style from './Title.module.css'

const Title = ({children, isHeader}) => {
  return (
    <div className={isHeader ? style.headerTitle: style.title}>{children}</div>
  )
}

export default Title