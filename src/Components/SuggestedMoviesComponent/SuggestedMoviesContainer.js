import React, { Component } from "react";
import SuggestedMoviesPresentation from "./SuggestedMoviesPresentation";
import {
  getLatestMovies,
  getTrendyFilms,
  getOscarNominations
} from "../../store/actions/moviesAction";
import PropTypes from "prop-types";
import { OSCARS, OSCAR_API_URLS } from "../../services/constants";

import { connect } from "react-redux";

class SuggestedMoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      randomMovies: [],
      isLatestMoviesCalled: false,
      isTrendyMoviesCalled: false,
      isOscarMoviesCalled: false
    };
  }

  async componentDidMount() {
    //make initial call to load data in gallery
    this.setState({ isLatestMoviesCalled: true });
    this.props.getLatestMovies();
    //
    setInterval(() => {
      if (!!this.state.isLatestMoviesCalled) {
        this.updateRandomMovieList(this.props.latestMovies);
        return;
      }
      if (!!this.state.isTrendyMoviesCalled) {
        this.updateRandomMovieList(this.props.trendyMovies);
        return;
      }
    }, 8000);
  }
  //make api calls when list of videos get to the last set
  async componentDidUpdate(prevProp) {
    if (prevProp.latestMovies.length === 4) {
      this.props.getLatestMovies();
      return;
    }
    if (prevProp.trendyMovies.length === 4) {
      this.props.getTrendyFilms();
    }
  }
  //create a "sorting" function that receives the response from api calls and returns random 4 movies from the list
  //update the component state with the response data
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
  //********************create event handlers for each api call*****************/
  //Trendy Movies Handler//
  trendyMoviesHandler = async () => {
    this.setState({
      isLatestMoviesCalled: false,
      isTrendyMoviesCalled: true
    });
    //call the trendy movies endpoint
    this.props.getTrendyFilms();
    //pass the response data into the sorting function
    await this.updateRandomMovieList(this.props.trendyMovies);
  };
  //Oscar Movies Handler//
  // oscarsMoviesHandler = nomination => {
  //   // this.setState({ isOscarMoviesCalled: true });
  //   let nominationUrl = "";
  //   switch (nomination) {
  //     case OSCARS.NOMINATIONS_2012:
  //       return (nominationUrl = OSCAR_API_URLS.OSCAR_2012);

  //     case OSCARS.NOMINATIONS_2011:
  //       return (nominationUrl = OSCAR_API_URLS.OSCAR_2011);

  //     case OSCARS.NOMINATIONS_2010:
  //       return (nominationUrl = OSCAR_API_URLS.OSCAR_2010);

  //     case OSCARS.NOMINATIONS_2009:
  //       return (nominationUrl = OSCAR_API_URLS.OCSAR_2009);

  //     default:
  //       return nominationUrl;
  //   }
  // };

  oscarsMoviesHandler = nomination => {
    this.setState({ isOscarMoviesCalled: true });

    let nominationUrl = "";
    if (nomination.target.textContent === OSCARS.NOMINATIONS_2012) {
      nominationUrl = OSCAR_API_URLS.OSCAR_2012;
    } else if (nomination.target.textContent === OSCARS.NOMINATIONS_2011) {
      nominationUrl = OSCAR_API_URLS.OSCAR_2011;
    } else if (nomination.target.textContent === OSCARS.NOMINATIONS_2010) {
      nominationUrl = OSCAR_API_URLS.OSCAR_2010;
    } else if (nomination.target.textContent === OSCARS.NOMINATIONS_2009) {
      nominationUrl = OSCAR_API_URLS.OCSAR_2009;
    } else {
      return nominationUrl;
    }

    this.props.getOscarNominations(nominationUrl);
  };
  render() {
    const { randomMovies } = this.state;

    return (
      <div>
        <SuggestedMoviesPresentation
          randomMovies={randomMovies}
          trendyMoviesHandler={this.trendyMoviesHandler}
          isLatestMoviesCalled={this.state.isLatestMoviesCalled}
          isTrendyMoviesCalled={this.state.isTrendyMoviesCalled}
          oscarsMoviesHandler={this.oscarsMoviesHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestMovies: state.latestMovies.data,
    trendyMovies: state.trendyMovies.data
  };
};

export default connect(
  mapStateToProps,
  { getLatestMovies, getTrendyFilms, getOscarNominations }
)(SuggestedMoviesContainer);

SuggestedMoviesContainer.propTypes = {
  latestMovies: PropTypes.array.isRequired,
  getLatestMovies: PropTypes.func.isRequired
};
