import React from 'react';
import './suggested-movies.css';

export const SuggestedMoviesPresentation = ({listOfMovies}) => {
    console.log(listOfMovies);
    return (
        <div>
            <h2 className="sub-heading">Suggested Movies</h2>
            <SuggestedMoviesTable />
            
        </div>
    )
}

export default SuggestedMoviesPresentation


const SuggestedMoviesTable = () => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Year</th>
                            <th scope="col">Actor</th>
                            <th scope="col">Rating</th>
                    </tr>
                </thead>
            </table>
            
        </div>
    )
}