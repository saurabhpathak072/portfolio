import React, { useContext } from 'react'
import { AppContext } from '../../../Context/Context'
import PageTitle from '../PageTitle/PageTitle'

const HeaderTitle = ({children, sticky}) => {
    const first = useContext(AppContext)
  return (
    <PageTitle size={'h1'} isSticky={sticky}>
    {children}{" "}
    <button className="toggle-btn" onClick={first.toggleSidebar}>
      ☰
    </button>
  </PageTitle>
  )
}

export default HeaderTitle