import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/Home.css'
import '../../styles/Hero.css'

const Home = () =>{

  const work = {title: "Full Stack Developer",
                blurb: "Designing custom internal React/NodeJS based web applications and maintaining legacy Ruby/Rails public facing site for",
                name: "Superior Court of California, County of Kern",
                url: "https://kern.courts.ca.gov/"}


  return (
    <div className="hero-container">
      <Container> 
        <Row>
          <Col md={12}>
            <h4>Hello. I am</h4>
            <h1 className="big-heading">Robert Swanson </h1>  
            <h3>{work.title}</h3>
            <p style={{borderTop: '1px solid #ccd6f6', maxWidth: '100%'}}/>
            <h6>{work.blurb}</h6>
            <h5>
              <a className="link-color" href={work.url} target="_blank" rel="opener">
                {work.name}
              </a>
            </h5>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home