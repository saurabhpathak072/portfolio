import React, { useContext } from 'react';
// import { experienceData } from '../../../Data/data';
import PageTitle from '../../UI/PageTitle/PageTitle';
import Timeline from '../../UI/Timeline/Timeline';
import styles from './Experience.module.css'
import { AppContext } from '../../../Context/Context';

const Experience = () => {
  const {data} = useContext(AppContext)
  return (
    <div className={styles.experience}>
        <PageTitle size={'h2'} className={'p-2'}>
            Experience
        </PageTitle>
        <div>
        <Timeline data={data.experience}/>
        </div>
    </div>
  )
}

export default Experience