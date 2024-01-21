import React, { useContext } from 'react'
// import { educationData } from '../../../Data/data'
import PageTitle from '../../UI/PageTitle/PageTitle'
import Timeline from '../../UI/Timeline/Timeline'
import styles from './Education.module.css'
import { AppContext } from '../../../Context/Context'

const Education = () => {
  const { data} = useContext(AppContext)
  return (
    <div className={styles.container}>
        <PageTitle size={'h2'} className={'p-2'}>
            Education
        </PageTitle>
        <div>
        <Timeline data={data.experience}/>
        </div>
    </div>
  )
}

export default Education