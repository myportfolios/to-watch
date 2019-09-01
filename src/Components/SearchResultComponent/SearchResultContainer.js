import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import SearchResultPresentation from "./SearchResultPresentation";

export class SearchResultContainer extends Component {
  render() {
    const { listOfMovies } = this.props;

    return (
      <div>
        <SearchResultPresentation listOfMovies={listOfMovies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfMovies: state.movies.moviesData
});

export default connect(
  mapStateToProps,
  {}
)(SearchResultContainer);

// SearchResultContainer.propTypes = {

// }
////////////SuggestedMovie Endpoint///////////////////

/*
https://api.themoviedb.org/3/search/movie?primary_release_year=2018&include_adult=false&page=1&query=action&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26
*/
//////////////////////////////////////////////////////////
