import './App.css';
import { element } from 'prop-types';
import { Col, Container, Image, Jumbotron, Offcanvas, Row} from 'react-bootstrap'
import header_image from './white_rs_logo.png' 
import {useHistory} from "react-router-dom"
import Sidebar from './components/sidebar/Sidebar.jsx'

const App=({children}) => {

  const history = useHistory();

  return (
    <>
      <div className="App">
     
        <header className="App-header">
          
          <Image src={header_image} className="header-image" onClick={()=>{history.push('/')}}/>

        </header>     

        <Container fluid style={{marginLeft: '270px', marginTop: '1em'}}>
          <Row>
            <Col>
              {children}
            </Col>
          </Row>
        </Container>
        
        {/*
        <header className="App-header">
          <Jumbotron className="Jumbo-header" >
            {/* <Image height='100%' width='1580px' src={header_image} fluid/> 
            <Image className="header-image" src={header_image} fluid/>
            
          </Jumbotron>
        </header>     
        
        <Sidebar/> 
        <Container fluid style={{marginLeft: '270px', marginTop: '1em'}}>
          <Row>
            <Col>
              {children}
            </Col>
          </Row>
        </Container> */}

      </div>
    </>
  );
}

App.propTypes = {
  children: element
}

export default App;
