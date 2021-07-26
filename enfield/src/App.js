import './App.css';
import { element } from 'prop-types';
import { Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/header/Header'


const App=({children}) => {

  return (
    <>
      <div className="App">
     
        <header className="App-header">
          <Header/>
        </header>     

        <Container fluid style={{marginLeft: '0px', marginTop: '0'}}>
          <Row>
            <Col>
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

App.propTypes = {
  children: element
}

export default App;
