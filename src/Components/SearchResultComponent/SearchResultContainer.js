import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovies,
  getMoviesCollection
} from "../../store/actions/moviesAction";

import PropTypes from "prop-types";

import SearchResultPresentation from "./SearchResultPresentation";

export class SearchResultContainer extends Component {
  state = {
    movieTitle: "",
    selectedMovies: []
  };
  //save all selected movies to store

  moviesCollectionHandler = () => {
    this.props.getMoviesCollection(this.state.selectedMovies);
  };
  // selectedMoviesHandler = (id, e) => {
  //   let checked = e.target.checked;
  //   console.log(checked);

  //   let searchResultCopy = this.props.searchResult;

  //   let selectedMovies =
  //     checked &&
  //     searchResultCopy.filter(movie => {
  //       return movie.id === id;
  //     });

  //   this.setState({
  //     selectedMovies: [...this.state.selectedMovies, selectedMovies]
  //   });
  //   !checked &&
  //     this.setState({
  //       selectedMovies: [
  //         ...this.state.selectedMovies.filter(item => {
  //           return item.id !== id;
  //         })
  //       ]
  //     });
  //   console.log(this.state.selectedMovies);
  //   // checked && this.props.getMoviesCollection(selectedMovies);
  // };
  selectedMoviesHandler = (id, e) => {
    let checked = e.target.checked;
    console.log(checked);

    let searchResultCopy = this.props.searchResult;
    let selectedMovies = searchResultCopy.filter(movie => {
      console.log(id);
      return movie.id === id;
    });

    if (!!checked) {
      if (!this.state.selectedMovies.includes(selectedMovies)) {
        this.setState({
          selectedMovies: [selectedMovies, ...this.state.selectedMovies]
        });
      }
    } else if (!checked) {
      this.setState({
        selectedMovies: this.state.selectedMovies.map(movie => {
          console.log(movie);
          return movie.filter(item => {
            return item.id !== id;
          });
        })
      });
    }
    console.log(this.state.selectedMovies);
    // console.log(this.state.selectedMovies);
    // checked && this.props.getMoviesCollection(selectedMovies);
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
    //if 'backspace' or 'delete' is pressed clear the list result
    keycode === 8 && this.props.searchMovies("");
  };
  render() {
    const { searchResult } = this.props;
    return (
      <div>
        <SearchResultPresentation
          moviesCollectionHandler={this.moviesCollectionHandler}
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
  { searchMovies, getMoviesCollection }
)(SearchResultContainer);

// SearchResultContainer.propTypes = {

// }
////////////SuggestedMovie Endpoint///////////////////

/*
https://api.themoviedb.org/3/search/movie?primary_release_year=2018&include_adult=false&page=1&query=action&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26
*/
//////////////////////////////////////////////////////////
