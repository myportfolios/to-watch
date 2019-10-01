import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovies,
  getselectedMovies
} from "../../store/actions/moviesAction";

import PropTypes from "prop-types";

import SearchResultPresentation from "./SearchResultPresentation";

export class SearchResultContainer extends Component {
  state = {
    movieTitle: ""
  };
  selectedMoviesHandler = (id, e) => {
    let checked = e.target.checked;

    let searchResultCopy = this.props.searchResult;

    let selectedMovies =
      searchResultCopy &&
      searchResultCopy.filter(item => {
        return item.id === id;
      });

    checked && this.props.getselectedMovies(selectedMovies);
  };
  //To do: create an action and call it in selectedMoviesHandler()*****DONE/////////
  ///The action will save the selected movies directly to the store*****DONE!///
  ///The action will also delete the unchecked movies from the store////

  searchMovieHandler = e => {
    this.setState({
      movieTitle: e.target.value
    });
    ///////////////check if "enter" was pressed on the keyboard/////////////////
    let keycode = e.which || e.keyCode;
    /////make api call and pass in
    keycode === 13 && this.props.searchMovies(this.state.movieTitle);
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
  { searchMovies, getselectedMovies }
)(SearchResultContainer);

// SearchResultContainer.propTypes = {

// }
////////////SuggestedMovie Endpoint///////////////////

/*
https://api.themoviedb.org/3/search/movie?primary_release_year=2018&include_adult=false&page=1&query=action&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26
*/
//////////////////////////////////////////////////////////
