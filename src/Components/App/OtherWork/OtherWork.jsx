import React from 'react'
import { Container } from 'react-bootstrap'
import PageTitle from '../../UI/PageTitle/PageTitle'
import styles from './Otherwork.module.css'
import OtherWorkCard from './OtherWorkCard/OtherWorkCard'

const OtherWork = ({otherWorkList}) => {
  return (
    <div className={styles.container}>
    <PageTitle size={"h2"} className={"p-2"}>
      Other Works
    </PageTitle>
    <div>
      <Container>
        <OtherWorkCard otherWorkList={otherWorkList}/>
      </Container>
    </div>
  </div>
  )
}

export default OtherWork