import React from 'react';
// import { experienceData } from '../../../Data/data';
import PageTitle from '../../UI/PageTitle/PageTitle';
import Timeline from '../../UI/Timeline/Timeline';
import styles from './Experience.module.css'
import { Icon } from '../../UI/Icon/Icon';
import {useSelector} from 'react-redux'

const Experience = ({experience}) => {
  const isEdit = useSelector(state=>state.uiState.isEditable)
  return (
    <div className={styles.experience}>
        <PageTitle size={'h2'} className={'p-2'}>
            Experience {isEdit && <Icon iconName={'Plus'}/>}
        </PageTitle>
        <div>
        <Timeline data={experience}/>
        </div>
    </div>
  )
}

export default Experience