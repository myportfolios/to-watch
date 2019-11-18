import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import HomeComponentContainer from "./Components/HomeComponent/HomeComponentContainer";
import SearchResultContainer from "./Components/SearchResultComponent/SearchResultContainer";
import SuggestedMoviesContainer from "./Components/SuggestedMoviesComponent/SuggestedMoviesContainer";
import HeaderContainer from "./Components/HeaderComponent/HeaderContainer";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";
/*************Note*********************/
/*Placing HeaderConainer within BrowserRouter will give it access to Link module in react*/
/*However, not wrapping it in a 'Route' will ensure it displays on all paths/pages*/
const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Route path="/" exact component={App} />
        <Route path="/home" exact component={App} />
        <Route path="/about" component={HomeComponentContainer} />
        <Route path="/trendy-movies" component={SuggestedMoviesContainer} />
        <Route path="/search-movie" component={SearchResultContainer} />
        {/* <Route path="/contact" component={FooterComponent} /> */}
        <FooterComponent />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Routes;
