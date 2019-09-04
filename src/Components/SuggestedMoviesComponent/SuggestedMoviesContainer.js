import React, { Component } from "react";
import SuggestedMoviesPresentation from "./SuggestedMoviesPresentation";
import {
  getLatestMovies,
  getTrendyFilms
} from "../../store/actions/moviesAction";
import PropTypes from "prop-types";

import { connect } from "react-redux";

class SuggestedMoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      randomMovies: [],
      isLatestMoviesCalled: false,
      isTrendyMoviesCalled: false
    };
  }

  componentDidMount() {
    this.props.getLatestMovies();
    this.setState({ isLatestMoviesCalled: true });

    setInterval(async () => {
      if (this.props.latestMovies.length === 0) {
        this.props.getLatestMovies();
        return;
      }

      await this.updateRandomMovieList(this.props.latestMovies);
    }, 8000);
  }

  updateRandomMovieList = list => {
    let size = 4;
    // Do manipulations
    let randomMovies = list.slice(0, size).map(() => {
      return list && list.splice(Math.floor(Math.random() * list.length), 1)[0];
    });
    this.setState({
      randomMovies: randomMovies
    });
  };
  filmFilterHandler = () => {
    this.props.getTrendyFilms();
    this.setState({
      isLatestMoviesCalled: false,
      isTrendyMoviesCalled: true
    });
    console.log("yes!");
  };
  render() {
    const { latestMovies } = this.props;
    const { randomMovies } = this.state;

    return (
      <div>
        <SuggestedMoviesPresentation
          latestMovies={latestMovies}
          randomMovies={randomMovies}
          filmFilterHandler={this.filmFilterHandler}
          isLatestMoviesCalled={this.state.isLatestMoviesCalled}
          isTrendyMoviesCalled={this.state.isTrendyMoviesCalled}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestMovies: state.latestMovies.data
  };
};

export default connect(
  mapStateToProps,
  { getLatestMovies, getTrendyFilms }
)(SuggestedMoviesContainer);

SuggestedMoviesContainer.propTypes = {
  latestMovies: PropTypes.array.isRequired,
  getLatestMovies: PropTypes.func.isRequired
};
