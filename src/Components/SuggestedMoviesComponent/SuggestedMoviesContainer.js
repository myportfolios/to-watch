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