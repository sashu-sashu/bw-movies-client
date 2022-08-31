import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';


// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class BWMoviesApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}
// Finds the root of your app
//const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
//ReactDOM.render(React.createElement(BWMoviesApplication), container);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<BWMoviesApplication />)