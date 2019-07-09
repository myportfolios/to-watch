import React from "react";
import HomeComponentContainer from "../src//Components/HomeComponent/HomeComponentContainer";
import SuggestedMoviesContainer from '../src/Components/SuggestedMoviesComponent/SuggestedMoviesContainer'

import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <HomeComponentContainer />
        <SuggestedMoviesContainer />
      </div>
    </Provider>
  );
}

export default App;
