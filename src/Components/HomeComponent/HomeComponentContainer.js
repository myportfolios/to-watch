import React, { Component } from "react";
import HomeComponentPresentation from "Components/HomeComponent/HomeComponentPresentation";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSuggestedMovies } from "store/actions/moviesAction";

import { getMoviesSelector } from "store/selectors/movie-title-selector";

export class HomeComponentContainer extends Component {
  componentDidMount() {
    this.props.getSuggestedMovies();
    //window.scroll(0,0)
  }

  render() {
    const { movies } = this.props;

    return <HomeComponentPresentation movies={movies} />;
  }
}

HomeComponentContainer.propTypes = {
  movies: PropTypes.array,
  getSuggestedMovies: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  movies: getMoviesSelector(state)
});

export default connect(mapStateToProps, { getSuggestedMovies })(
  HomeComponentContainer
);
