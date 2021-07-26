import '../../styles/Header.css'
import React, {useState} from 'react'
import { Col,Collapse, Container, Nav, Row} from 'react-bootstrap'
import { Squash } from 'hamburger-react'
import {OpenIconLogo, CloseIconLogo} from '../icon/Icon'
import {useHistory} from "react-router-dom"

export const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const history = useHistory();

  return(
    <>
      <Row  style={{height: "100%", width:"100%"}}>
        <Col >
          <Container onClick={()=>{history.push('/')}} style={{cursor: 'pointer', height:"50px", minWidth:"200px"}}>

            <Row style={{height: "100%"}}>

              <div style={{padding:0, height:"100%", width: "32px", paddingTop:"10px"}}>
                <OpenIconLogo className="logo"/>
              </div>
              <div className="header-font d-none d-md-block" style={{height:"100%", width: "90px", color:'white'}}>
                rts
                {/* <h1 className='header-font' style={{margin:0, width: "170px"}} onClick={()=>{history.push('/')}}>rts</h1> */}
              </div>
              <div className="header-font d-none d-lg-block" style={{marginTop:'30px', height:"15px", width: "70px",  fontSize: '15px', color:'white'}}>
                coding
              </div>
              <div style={{padding:0, height:"100%", width: "120px", paddingTop:"10px"}}>
                <CloseIconLogo/>
              </div>
            </Row>
          </Container>  
        </Col>
        <Col >    
          <div className="d-none d-md-block">  
            <Nav style={{fontSize:"20px",float:"right", paddingTop:"15px"}}>
              <Nav.Link style={{color:'white'}} href="/experience"> Experience </Nav.Link>
              <Nav.Link style={{color:'white'}} href="/about"> About </Nav.Link>
              <Nav.Link style={{color:'white', borderLeft: "1px solid #ccd6f6"}} href="/resume">Resume</Nav.Link>
            </Nav>
          </div>

          <div className="d-md-none" style={{float:"right"}}>
            <Squash toggled={isOpen} toggle={setOpen}/>
          </div>
          <div className="d-md-none"  style={{float:"right"}}>
            <Nav className="navbar navbar-dark red lighten-1 mb-4" >
              <Collapse in={isOpen} >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/experience">Experience</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                    </li>
                    <hr/>
                    <li className="nav-item">
                      <a className="nav-link" href="/resume">Resume</a>
                    </li>
                  </ul>
                </Collapse>
            </Nav>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Header;