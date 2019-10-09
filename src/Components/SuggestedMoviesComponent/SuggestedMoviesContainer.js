import React, { Component } from "react";
import SuggestedMoviesPresentation from "./SuggestedMoviesPresentation";
import {
  getLatestMovies,
  getTrendyFilms,
  getOscarNominations,
  saveNominationUrlToStore,
  getCinemasMovies
} from "../../store/actions/moviesAction";
import PropTypes from "prop-types";
import { OSCARS, OSCAR_API_URLS } from "../../services/constants";

import { connect } from "react-redux";

export class SuggestedMoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      randomMovies: [],
      isLatestMoviesCalled: false,
      isTrendyMoviesCalled: false,
      isOscarMovies2012Called: false,
      isAtTheCinemas: false
    };
  }
  //To do...store "nomination" to redux store and pass it in the componentDidUpdate

  async componentDidMount() {
    //make initial call to load data in gallery
    this.setState({
      isLatestMoviesCalled: true
    });
    await this.props.getLatestMovies();
    //reload the gallery every 8 seconds by recalling the most recent action creator
    setInterval(() => {
      if (!!this.state.isLatestMoviesCalled) {
        this.updateRandomMovieList(this.props.latestMovies);
        return;
      }
      if (!!this.state.isTrendyMoviesCalled) {
        this.updateRandomMovieList(this.props.trendyMovies);
        return;
      }
      if (!!this.state.isOscarMovies2012Called) {
        this.updateRandomMovieList(this.props.oscars);
      }
      if (!!this.state.isAtTheCinemas) {
        this.updateRandomMovieList(this.props.atTheCinemas);
      }
    }, 10000);
  }
  //make api calls when list of videos get to the last set
  async componentDidUpdate(prevProp, prevState) {
    // console.log(prevProp.isAtTheCinemas && prevProp.isAtTheCinemas.length);
    console.log(prevProp);
    if (prevProp.latestMovies.length === 4) {
      this.props.getLatestMovies();
      return;
    }
    if (prevProp.trendyMovies.length === 4) {
      this.props.getTrendyFilms();
    }
    if (prevProp.oscars.length === 1 || prevProp.oscars.length === 2) {
      this.props.getOscarNominations(this.props.nominationUrl);
      return;
    }
    if (prevProp.atTheCinemas.length === 4) {
      this.props.getCinemasMovies();
      return;
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
      isOscarMovies2012Called: false,
      isAtTheCinemas: false,
      isTrendyMoviesCalled: true
    });
    //call the trendy movies endpoint
    this.props.getTrendyFilms();
    //pass the response data into the sorting function
    await this.updateRandomMovieList(this.props.trendyMovies);
  };
  //Oscar Movies Handler//
  // oscarsMoviesHandler = nomination => {
  //   // this.setState({ isOscarMovies2012Called: true });
  //   let nominationUrl = "";
  //   switch (nomination) {
  //     case nomination.target.textContent === OSCARS.NOMINATIONS_2012:
  //       nominationUrl = OSCAR_API_URLS.OSCAR_2012;
  //       break;
  //     case nomination.target.textContent === OSCARS.NOMINATIONS_2011:
  //       nominationUrl = OSCAR_API_URLS.OSCAR_2011;
  //       break;
  //     case nomination.target.textContent === OSCARS.NOMINATIONS_2010:
  //       nominationUrl = OSCAR_API_URLS.OSCAR_2010;
  //       break;
  //     case nomination.target.textContent === OSCARS.NOMINATIONS_2009:
  //       nominationUrl = OSCAR_API_URLS.OCSAR_2009;
  //       break;
  //     default:
  //       nominationUrl = "";
  //   }
  //   this.props.getOscarNominations(nominationUrl);
  // };

  oscarsMoviesHandler = async nomination => {
    this.setState({
      isOscarMovies2012Called: true,
      isLatestMoviesCalled: false,
      isTrendyMoviesCalled: false,
      isAtTheCinemas: false
    });

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

    await this.props.getOscarNominations(nominationUrl);

    await this.props.saveNominationUrlToStore(nominationUrl);
  };
  atTheCinemasHandler = async () => {
    //Make api call
    this.setState({
      isAtTheCinemas: true,
      isLatestMoviesCalled: false,
      isOscarMovies2012Called: false,
      isTrendyMoviesCalled: false
    });
    await this.props.getCinemasMovies();
  };
  render() {
    const { randomMovies, latestMovies } = this.state;
    const { fetching, atTheCinemas } = this.props;

    return (
      <div>
        <SuggestedMoviesPresentation
          atTheCinemas={atTheCinemas}
          atTheCinemasHandler={this.atTheCinemasHandler}
          latestMovies={latestMovies}
          fetching={fetching}
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
    trendyMovies: state.trendyMovies.data,
    oscars: state.oscarNominations.data,
    nominationUrl: state.nominationUrl.data,
    fetching: state.latestMovies && state.latestMovies.fetching,
    atTheCinemas: state.atTheCinemas.data
  };
};

export default connect(
  mapStateToProps,
  {
    getLatestMovies,
    getTrendyFilms,
    getOscarNominations,
    saveNominationUrlToStore,
    getCinemasMovies
  }
)(SuggestedMoviesContainer);

SuggestedMoviesContainer.propTypes = {
  latestMovies: PropTypes.array.isRequired,
  getLatestMovies: PropTypes.func.isRequired
};
