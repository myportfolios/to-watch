import React from "react";
import HomeComponentContainer from "Components/HomeComponent/HomeComponentContainer";
import SearchResultContainer from "Components/SearchResultComponent/SearchResultContainer";
import SuggestedMoviesContainer from "Components/SuggestedMoviesComponent/SuggestedMoviesContainer";

import "./index.css";

function App() {
  return (
    <div className="App">
      {/* <HeaderContainer /> */}
      <HomeComponentContainer />
      <SuggestedMoviesContainer />
      <SearchResultContainer />
    </div>
  );
}

export default App;
