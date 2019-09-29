import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovies } from "../../store/actions/moviesAction";

import PropTypes from "prop-types";

import SearchResultPresentation from "./SearchResultPresentation";

export class SearchResultContainer extends Component {
  state = {
    searchedMovie: ""
  };
  selectedMoviesHandler = (id, e) => {
    console.log(id);
  };

  searchMovieHandler = e => {
    this.setState({
      searchedMovie: e.target.value
    });
    let keycode = e.which || e.keyCode;
    keycode === 13 && this.props.searchMovies(this.state.searchedMovie);
  };
  render() {
    const { searchResult } = this.props;
    return (
      <div>
        <SearchResultPresentation
          searchMovieHandler={this.searchMovieHandler}
          searchResult={searchResult}
          selectedMoviesHandler={this.selectedMoviesHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchMovie.data
});

export default connect(
  mapStateToProps,
  { searchMovies }
)(SearchResultContainer);

// SearchResultContainer.propTypes = {

// }
////////////SuggestedMovie Endpoint///////////////////

/*
https://api.themoviedb.org/3/search/movie?primary_release_year=2018&include_adult=false&page=1&query=action&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26
*/
//////////////////////////////////////////////////////////
