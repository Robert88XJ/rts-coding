import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import headshot from '../../media/headshot.jpg'
import deathValley from '../../media/death_valley.jpg'
import boardGames from '../../media/board_games.jpg'
// import twilight from '../../media/twilight.jpg'
import jeep from '../../media/jeep.jpg'

import '../../styles/Hero.css'
import '../../styles/About.css'

const About = () =>{
  return(
    <>
      <Row style={{textAlign:'center', flexDirection:'column', paddingBottom:'15px', paddingTop:'15px'}}>
        <img style={{maxWidth: "80%", alignSelf:'center'}} src={deathValley} alt=''/>
      </Row>
      <Container className="hero-container">
        <Row style={{paddingBottom: "10px", width:"100%"}}>
          <h2 className="title">About me:</h2>
        </Row>

        <Row>
          <Col md={{size:4,offset:4}} style={{display: 'flex', paddingBottom: '15px', margin:0, justifyContent: 'center', alignItems: 'center'}}>
            <img className="profile-image" src={headshot} alt='' />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            {/* <p className="content-font">
              I have lived in Kern County, CA my entire life. 
            </p> */}
            <p className="content-font">
              {"I work for the Superior Court of California, County of Kern and love what I do. The red tape and tight budget makes the public sector "}  
              <s>{"frustrating"}</s> <s>{" maddening"}</s>
              {" challenging, but my development work, focused on making court interactions easier for employees and the public, is incredibly rewarding."}
            </p>
            {/* MOVE THIS TO EXPERIENCE */}
            {/* <p className="content-font">
              I started my career at the courts by working with a Case Management team who needed to recreate legacy reports on a new case management system. 
              This required reverse engineering the decades old reports because their database queries were incompatible with the new database. This position 
              expanded my SQL and SSMS/SSRS knowledge.              
            </p> */}
            {/* <p className="content-font">
              Currently working as a Full Stack Developer as a team of two. This requires that I be able to provide QA, work support tickets, participate in project 
              planning meetings, manage Jira tasks and still find time to write some code. Our future projects are using a PERN stack, but our public and intranet sites 
              are still using Ruby/Rails. Once our current public portal project is complete, the old site will be migrated, one feature at a time, to the new stack.   
            </p> */}
            <p className="content-font">
              Outside of work I enjoy working on hardware projects employing micro-controllers, Raspberry Pis or FPGAs. These projects have allowed me to retain the knowledge I paid too much for in college, but more importantly scratches the itch to tinkerer with the amalgamation of physical hardware and code which first sparked my interest in programming. Pursuing these interests has made me stronger with Fusion 360, Linux, C, VHDL.
            </p>
            <Row style={{ paddingTop:'5px'}}>
              <Col md={{size:4}}>
                <p className="content-font">
                  {"My wife and I really enjoy board games. We regularly get together with friends to enjoy some competitive or cooperative board games like "}
                  <a href="https://www.shutupandsitdown.com/videos/review-twilight-imperium-fourth-edition/">Twilight Imperium</a>
                  {", "}
                  <a href="https://www.shutupandsitdown.com/videos/the-opener-1/">Flashpoint</a>
                  {", "}
                  <a href="https://www.shutupandsitdown.com/videos/review-gloomhaven/">Gloomhaven</a>
                  {", or "}
                  <a href="https://www.shutupandsitdown.com/videos/review-too-many-bones/">Too Many Bones</a>
                  . We are always on the look out for new games to add to our collection. Sadly, Covid has prevented us from getting together with our normal gaming group, but a few vaccinated friends have 
                  started game night again. 
                </p>
              </Col>
              <Col md={6} style={{maxHeight:'300px',textAlign:'center',verticalAlign: 'top', maxWidth:"80%", margin:'0'}}>
                <img src={boardGames} style={{ verticalAlign: 'top', maxWidth:"80%", margin:'0'}} alt=''/>
              </Col>
            </Row>
            <Row>
              <Col md={{size:4}}>
                <p className="content-font">
                  Occasionally, we enjoy going on an adventure in the Jeep. Living in California there is plenty of trails leading to some amazing views. We have made several trips to Death Valley and explored many corners of the national park. 
                  There are still remnants of the lead and borax mines which where abandoned when the veins dried up. It is definitely worth the trip, however the 122 degree summer days is most likely where the valley gets its name. Titus Canyon Rd (photo on the right) 
                  starts as large hills with amazing views and leads into a canyon where the walls slowly close in on both sides until it lets out at the desert flats. Dante's Peak (photo at the top of the page) offers amazing views of the entire Badwater Basin from one of the highest points in the park. 
                </p>
              </Col>
              <Col md={{size:6}} style={{verticalAlign: 'top', textAlign:'center', maxWidth:"80%", margin:'0'}}>
                <img src={jeep} style={{verticalAlign: 'top', maxWidth:"80%", margin:'0'}} alt=''/>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default About;