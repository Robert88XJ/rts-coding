import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Card, Col, Container, Nav, Row} from 'react-bootstrap'
import '../../styles/Experience.css'

export const Experience = () => {
  const navItems = [{
    key:0,
    icon:"fas fa-gavel",
    title:"KCSC - Software Developer",
    header:"Kern County Superior Court - Software Developer",
    content:"Worked as part of a small team designing and maintaining Ruby on Rails/React NodeJS environments;Created and updated web applications for public and internal websites;Met with end users to assess project needs to fulfill requests;Handled QA tests and approved pull request;Completed helpdesk tickets requesting changes and fixes;Used APIs to integrate web applications to vendor software"  
  },{
    key:1,
    icon:"fas fa-balance-scale",
    title:"KCSC - Programmer",
    header:"Kern County Superior Court - Programmer/System Analyst",
    content:"Provided database support for Case Management. This included creating queries and stored procedures to be used with Microsoft Report Builder to create Enterprise Custom Reports for a new Case Management system. Worked with multiple departments to recreate reports from the legacy CMS including updating logic and design as requested. In addition to creating new reports, some reports built by contractors were modified or repaired. Created and Modified XML tokens used by end users to create reports built within the CMS program. Managed access for production and development databases given to court employees and external users." 
  },{
    key:2,
    icon:"fas fa-oil-can",
    title:"CRC - IT Specialist",
    header:"California Resources Corp - IT Specialist",
    content:"Provided general hardware and software support for end users;Imaged and deployed machines for new hires;Handled hardware upgrades and data transfer for existing employees;Created batch scripts to automate time consuming imaging task;Assisted in several large scale projects including spinoff of all Occidental Petroleum assets in California to CRC, a hardware refresh which replaced 450 machines, and relocating 200 users to a new office over a weekend." 
  },{
    key:3,
    icon:"fas fa-chalkboard-teacher",
    title:"CSUB - Instructor",
    header:"California State University, Bakersfield - Instructor",
    content:"Acted as interim instructor for ECE 322 - Digital Design with VHDL;Presented PowerPoint lectures;Assisted students with completing lab work;Graded exams, homework and lab papers" 
  },{
    key:4,
    icon:"fas fa-robot",
    title:"CSUB - Research Assistant",
    header:"California State University, Bakersfield - Research Assistant",
    content:"Assisted robotics professor while working on my senior project; Worked on National Instruments DaNi robotics platform; Created hand gesture interface using Xbox Kinect for tracking; Created C# library to allow National Instruments LabVIEW software to access Kinect hardware"
  }
  ]

  const [active, setActive] = useState("0")
  const [lineItems, setLineItems] = useState(navItems[0].content)

  useEffect(()=>{
    setLineItems(navItems[active].content)
  }, [active] )

  function handleClick(prop){
    setActive(prop.target.id)
  }



  return(
    <>
      <Container  style={{display:'block!important', paddingTop:"40px"}}>
        <h2 className="title">Work Experience:</h2>
        <Row className="card-nav" style={{fontSize:'20px', width: '100%'}}> 
          <Col md={4} >
            <Nav className="navbar lighten-1 mb-4 " >
                <ul className="navbar-nav mr-auto">
                  {navItems.map((navItem, i) =>
                    <li id={i}  className={i===active ? "selected nav-item" : "unselected nav-item"}  onClick={handleClick} style={{cursor:"pointer", padding:'5px'}} >
                      {/* <i id={"image-"+i} className={i==active? "selected "+navItem.icon : "unselected "+navItem.icon}></i>  */}
                      <i id={"image-"+i} className={navItem.icon} style={{padding:"5px"}} alt=''></i> 
                      {navItem.title}
                      
                    </li>
                  )}
                </ul>
              </Nav>
          </Col>
          <Col md={8}>
            <Card className="dark" style={{backgroundColor:'#0a192f',color:"white"}}>
              <Card.Body>
                <Card.Title>
                  {navItems[active].header}
                </Card.Title>
                <Card.Text>
                  {/* {lineItems} */}

                  <ul>
                    {console.log(lineItems)}      
                    {lineItems.split(";").map((lineItem)=>(
                      <li>
                        {lineItem}
                      </li>
                    ))}
                  </ul>  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Experience;