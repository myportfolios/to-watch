import React from "react";
import HomeComponentContainer from "../src//Components/HomeComponent/HomeComponentContainer";
import SearchResultContainer from "../src/Components/SearchResultComponent/SearchResultContainer";
import SuggestedMoviesContainer from "../src/Components/SuggestedMoviesComponent/SuggestedMoviesContainer";

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
