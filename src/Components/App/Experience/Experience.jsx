import React from 'react';
import { experienceData } from '../../../Data/data';
import PageTitle from '../../UI/PageTitle/PageTitle';
import Timeline from '../../UI/Timeline/Timeline';
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <div className={styles.experience}>
        <PageTitle size={'h2'} className={'p-2'}>
            Experience
        </PageTitle>
        <div>
        <Timeline data={experienceData}/>
        </div>
    </div>
  )
}

export default Experience