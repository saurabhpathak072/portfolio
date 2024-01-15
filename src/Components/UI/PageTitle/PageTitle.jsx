import React from 'react'
import Title from '../Title/Title'
import style from './PageTitle.module.css'

const PageTitle = ({children}) => {
  return (
    <>
    
    <div className={`${style.pageTitle} h1 m-3 d-flex justify-content-end`}>
        <Title>
            {children}
        </Title>
    </div>
    <hr className={style.hr}/>
    </>
  )
}

export default PageTitle