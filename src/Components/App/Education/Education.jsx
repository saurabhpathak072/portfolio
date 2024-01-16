import React from 'react'
import { testData } from '../../../Data/data'
import PageTitle from '../../UI/PageTitle/PageTitle'
import Timeline from '../../UI/Timeline/Timeline'
import styles from './Education.module.css'

const Education = () => {
  return (
    <div className={styles.container}>
        <PageTitle size={'h2'} className={'p-2'}>
            Education
        </PageTitle>
        <div>
        <Timeline data={testData}/>
        </div>
    </div>
  )
}

export default Education