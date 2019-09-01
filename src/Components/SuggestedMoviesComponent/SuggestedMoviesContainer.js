import React, { Component } from "react";
import SuggestedMoviesPresentation from "./SuggestedMoviesPresentation";
import { getLatestMovies } from "../../store/actions/moviesAction";
import PropTypes from "prop-types";

import { connect } from "react-redux";

class SuggestedMoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      randomMovies: []
    };
  }

  componentDidMount() {
    this.props.getLatestMovies();

    setInterval(() => {
      this.updateRandomMovieList(this.props.latestMovies);
    }, 8000);
  }

  updateRandomMovieList = list => {
    let size = 4;
    // Do manipulations
    let randomMovies = list.slice(0, size).map(() => {
      // console.log(Math.floor(Math.random() * list.length));
      console.log(list);
      return list.splice(Math.floor(Math.random() * list.length), 1)[0];
    });
    this.setState({
      randomMovies: randomMovies
    });
  };
  render() {
    const { latestMovies } = this.props;
    const { randomMovies } = this.state;
    console.log(latestMovies);
    return (
      <div>
        <SuggestedMoviesPresentation
          latestMovies={latestMovies}
          randomMovies={randomMovies}
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
  { getLatestMovies }
)(SuggestedMoviesContainer);

SuggestedMoviesContainer.propTypes = {
  latestMovies: PropTypes.array.isRequired,
  getLatestMovies: PropTypes.func.isRequired
};

/* 
updateRandomMovieList = list => {
    let size = 4;
    // Do manipulations
    let randomMovies = list.slice(0, size).map(() => {
      return list.splice(Math.floor(Math.random() * list.length), 1)[0];
    }, list.slice());
    this.setState({
      randomMovies: randomMovies
    });
  };
*/
