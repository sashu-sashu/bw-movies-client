import React from "react";
import { createRoot } from "react-dom/client";
import Container from "react-bootstrap/Container";
import MainView from './components/main-view/main-view';
import {createStore} from "redux";
import { Provider } from "react-redux";
import moviesApp from "./reducers/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";


// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";


// Main component (will eventually use all the others)
class BWMoviesApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];
const store = createStore(moviesApp, devToolsEnhancer());

const root = createRoot(container);
// Tells React to render your app in the root DOM element
root.render(React.createElement(BWMoviesApplication));