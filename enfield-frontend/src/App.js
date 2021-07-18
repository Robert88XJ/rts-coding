import './App.css';
import { element } from 'prop-types';
import { Image, Jumbotron} from 'react-bootstrap'
import header_image from './header_image_resize5.png'
// import header_image from './header_image_edited.png' 

const App=({children}) => {
  return (
    <div style={{backgroundColor: 'black'}} className="App">
      <header className="App-header">
        <Jumbotron fluid>
          <Image height='100%' width='2684' src={header_image} fluid/>
        </Jumbotron>
      </header>
      {children}
    </div>
  );
}

App.propTypes = {
  children: element
}

export default App;
