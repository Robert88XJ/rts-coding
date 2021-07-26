import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import headshot from '../../media/headshot.jpg'

import '../../styles/Hero.css'
import '../../styles/About.css'

const About = () =>{
  return(
    <>
      <Container className="hero-container">
        <h2 className="title">About me:</h2>

        <Row>
          <Col md={8}>
          </Col>
          <Col md={4} style={{display: 'flex', padding: 0, justifyContent: 'center', alignItems: 'center'}}>
            <img className="profile-image" src={headshot} alt='' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;