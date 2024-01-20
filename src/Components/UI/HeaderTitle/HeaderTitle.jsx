import React, { useContext } from 'react'
import { AppContext } from '../../../Context/Context'
import PageTitle from '../PageTitle/PageTitle'
// import styles from './HeaderTitle.module.css'

const HeaderTitle = ({children,isHeader, sticky}) => {
    const first = useContext(AppContext)
  return (
   
    <PageTitle isHeader={isHeader} size={'h1'} isSticky={sticky}>
    {children}{" "}
    <button className="toggle-btn" onClick={first.toggleSidebar}>
      ☰
    </button>
  </PageTitle>

  )
}

export default HeaderTitle