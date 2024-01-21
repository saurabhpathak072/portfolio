import React, { useContext } from 'react'
import PageTitle from '../../UI/PageTitle/PageTitle'
import styles from './Certifications.module.css'
import CertificationsCard from './CertificationsCard/CertificationsCard'
import { AppContext } from '../../../Context/Context'

const Certifications = () => {
  const {data} = useContext(AppContext)
  return (
    <div className={styles.container}>
    <PageTitle size={"h2"} className={"p-2"}>
      Certifications
    </PageTitle>
    <div>
      <CertificationsCard data={data.certificateList}/>
    </div>
  </div>
  )
}

export default Certifications