import React from "react";
import {
  BASE_URL,
  POSTER_SIZES
} from "../../store//reducers/reducer-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./suggested-movies.css";
import { useState } from "react";
export default function SuggestedMoviesPresentation({
  atTheCinemas,
  latestMovies,
  fetching,
  randomMovies,
  trendyMoviesHandler,
  isLatestMoviesCalled,
  isTrendyMoviesCalled,
  oscarsMoviesHandler,
  atTheCinemasHandler
}) {
  const [showOscars, setShowOscars] = useState(false);
  return (
    <>
      <div className="row suggested-movies-section">
        <FilterMoviesComponent
          className="col-lg-4 "
          trendyMoviesHandler={trendyMoviesHandler}
          oscarsMoviesHandler={oscarsMoviesHandler}
          showOscars={showOscars}
          setShowOscars={setShowOscars}
          atTheCinemasHandler={atTheCinemasHandler}
        />
        {!randomMovies.length && (
          <div className="spinner-box">
            <FontAwesomeIcon
              className="icon"
              icon="spinner"
              size="4x"
              spin
              color="green"
            />
          </div>
        )}
        <SuggestedMoviesGallery
          atTheCinemas={atTheCinemas}
          isLatestMoviesCalled={isLatestMoviesCalled}
          latestMovies={latestMovies}
          fetching={fetching}
          randomMovies={randomMovies}
          isTrendyMoviesCalled={isTrendyMoviesCalled}
          className="col-lg-8 movies-gallery"
        />
        <ListOfMovies randomMovies={randomMovies} />
      </div>
    </>
  );
}

const FilterMoviesComponent = ({
  trendyMoviesHandler,
  oscarsMoviesHandler,
  showOscars,
  setShowOscars,
  atTheCinemasHandler
}) => {
  return (
    <div className="float-left filter-movies-component">
      <span>Filter</span>

      <p onClick={trendyMoviesHandler}>Top Trendy Movies</p>

      <p onClick={() => setShowOscars(!showOscars)}>Oscars</p>
      {showOscars ? (
        <>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2012 Oscar Nominations
          </p>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2011 Oscar Nominations
          </p>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2010 Oscar Nominations
          </p>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2009 Oscar Nominations
          </p>
        </>
      ) : (
        <>
          <p onClick={atTheCinemasHandler}>At the Cinemas</p>
          <p onClick={"#"}>Latest Movies</p>
        </>
      )}
    </div>
  );
};

// const SuggestedMoviesGallery = ({ randomMovies, fetching }) => {
//   let randomMoviesJSX =
//     randomMovies &&
//     randomMovies.map(movie => {
//       return !fetching ? (
//         <div className="spinner-box">
//           <FontAwesomeIcon icon="circle-notch" className="spinner-icon" />
//         </div>
//       ) : (
//         <div key={movie.title}>
//           <img
//             className="img_size"
//             src={`${BASE_URL}${POSTER_SIZES}${movie.poster_path}`}
//             alt="poster"
//           />
//           <h3 className="align-text">{movie.title}</h3>
//           <h3 className="align-text">{movie.vote_average}</h3>
//         </div>
//       );
//     });

//   return <div className="flex">{randomMoviesJSX}</div>;
// };

const SuggestedMoviesGallery = ({ randomMovies }) => {
  let randomMoviesJSX =
    randomMovies &&
    randomMovies.map(movie => {
      return (
        <div key={movie.title}>
          <img
            className="img_size img-thumbnail videoPlaceholder"
            src={`${BASE_URL}${POSTER_SIZES}${movie.poster_path}`}
            alt="poster"
          />
          <h3 className="align-text">{movie.title}</h3>
          <h3 className="align-text">{movie.vote_average}</h3>
        </div>
      );
    });

  return <div className="flex">{randomMoviesJSX}</div>;
};

const ListOfMovies = ({ randomMovies }) => {
  let movieList =
    randomMovies &&
    randomMovies.map((movie, index) => {
      return (
        <tr>
          <td>{index}</td>
          <td>{movie.title}</td>
          <td>{movie.overview}</td>
          <td>{movie.vote_count}</td>
          <td>{movie.release_date}</td>
        </tr>
      );
    });
  return (
    <table className="table">
      <thead>
        <th>#</th>
        <th>Title</th>
        <th>Synopsis</th>
        <th>Votes</th>
        <th>Release Date</th>
      </thead>
      <tbody>{movieList}</tbody>
    </table>
  );
};
