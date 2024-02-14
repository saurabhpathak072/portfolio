import React from 'react'
import PageTitle from '../../UI/PageTitle/PageTitle'
import styles from './Certifications.module.css'
import CertificationsCard from './CertificationsCard/CertificationsCard'

const Certifications = ({certificateList}) => {
  return (
    <div className={styles.container}>
    <PageTitle size={"h2"} className={"p-2"}>
      Certifications
    </PageTitle>
    <div>
      <CertificationsCard data={certificateList}/>
    </div>
  </div>
  )
}

export default Certifications