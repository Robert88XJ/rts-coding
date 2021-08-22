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
    content: "Some of the projects I have worked on while working for the court:;Leave Of Absence: This was the first ruby-on-rails/web project I had ever worked on. HR requested a Leave of Absence app to be built in house to reduce cost and provide the custom features they required. We met with members of the HR team to assess their needs and determine a timeline for the project. Shortly before starting this project our team lost a developer so there was a lot of pressure to get up to speed and this project became a trial by fire. Having very little experience with web development or even tools like Git, it was a challenge to maintain my sanity and complete this project within the expected timeframe. However, it was the best opportunity to learn quickly and prove my worth as a developer. After completing the project, I gained a strong foundation for agile web development and learned several languages, frameworks and tools: including Ruby, Rails, Haml, JS, CSS, Git, and Bootstrap.; Building Maintenance Ticket Integration: Our building maintenance team requested that we create a service request page which would integrate with an existing service request tracking system. The front end form dynamically requested different information based on the type of service selected from a dropdown(i.e. replacing light bulbs, repairing doors, moving cubicles). This project required working with a third party vendor's API to allow the service request to be created with the correct fields(ie title, description, location), assigned the ticket to the correct group or person and sent an email to the requester and requestee after the user submitted the form. Though I had created REST APIs before this project, this was the first time I worked with a third party API to integrate with our applications.;Appointment Tracking/Court Portal: This is a on going, large scale project that is being worked on by both developers. The core of this project was to create a React/NodeJS stack for public users to access and submit data to the court. Originally this portal was designed for public access to case documents stored in a Case Management System, but Covid caused us to switch focus. Creating an appointment system was the Court's solution for limiting the number of visitors to the court locations. This is the first project our dev team has built using React/NodeJS. Personally, I think React is amazing. I am still learning, but React's responsiveness makes sites feel and look modern. As a bonus it is all javascript which our team has used on every perivous project. The Portal is moving along. Once we hammer out the details on handling permisions we should be able to deploy to the public."
  },{
    key:1,
    icon:"fas fa-balance-scale",
    title:"KCSC - Programmer",
    header:"Kern County Superior Court - Programmer/System Analyst",
    content: "This position was created to provide database support to a Case Management team working to transition the court's CMS to a new product. Its hard to describe how excited I was when I got the offer. My primary role was to recreate existing reports using a legacy data management system. Without access to the source code, I met with department heads and Subject Matter Experts to outline their needs and also identify line items on the old report that were missing titles. Once I had all the information that was needed I created a stored procedure which was imported into Microsoft Report Builder to create the form. My focus was not just to recreate the old report, but to improve functionality. In some cases, the report hadn't been update in decades and departments welcomed the opportunity to make the report more readable or informative. I really enjoyed working with these users. However, some departments refused changes even as minor as updating the MS-DOS font. These challenges were frustrating, but taught me to listen to user's concerns while still offer alternative solutions."
    // content:"Provided database support for Case Management. This included creating queries and stored procedures to be used with Microsoft Report Builder to create Enterprise Custom Reports for a new Case Management system. Worked with multiple departments to recreate reports from the legacy CMS including updating logic and design as requested. In addition to creating new reports, some reports built by contractors were modified or repaired. Created and Modified XML tokens used by end users to create reports built within the CMS program. Managed access for production and development databases given to court employees and external users." 
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
        {/* <h2 className="title">Work Experience:</h2> */}
        <Row className="card-nav" style={{fontSize:'20px', width: '100%'}}> 
          <Col md={{span:8, offset:2}}>
            <Nav className="navbar lighten-1 mb-4 " style={{display:'block', textAlign:'center'}} >
                <ul className="navbar-nav mr-auto" >
                  {navItems.map((navItem, i) =>
                    <li id={i}  className={i.toString()===active ? "selected nav-item" : "unselected nav-item"}  onClick={handleClick} style={{cursor:"pointer", padding:'5px'}} >
                      {/* <i id={"image-"+i} className={i==active? "selected "+navItem.icon : "unselected "+navItem.icon}></i>  */}
                      <i id={"image-"+i} className={navItem.icon} style={{padding:"5px"}} alt=''></i> 
                      {navItem.title}
                      
                    </li>
                  )}
                </ul>
              </Nav>
          </Col>
        </Row>
        <Row>
          {/* <Col md={8}>  */}
            <Card border="light" style={{backgroundColor:'#0a192f',color:"white"}}>
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
          {/* </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default Experience;