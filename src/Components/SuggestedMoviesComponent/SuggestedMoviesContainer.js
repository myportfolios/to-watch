import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SuggestedMoviesPresentation from './SuggestedMoviesPresentation';



export class SuggestedMoviesContainer extends Component {
    
    render() {
        const { listOfMovies } = this.props;
        console.log(listOfMovies);
        return (
            <div>
                <SuggestedMoviesPresentation listOfMovies={listOfMovies} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
listOfMovies: state.movies.moviesData
})


export default connect(mapStateToProps,
    {})(SuggestedMoviesContainer);

// SuggestedMoviesContainer.propTypes = {

// }
////////////SuggestedMovie Endpoint///////////////////

/*
https://api.themoviedb.org/3/search/movie?primary_release_year=2018&include_adult=false&page=1&query=action&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26
*/
//////////////////////////////////////////////////////////