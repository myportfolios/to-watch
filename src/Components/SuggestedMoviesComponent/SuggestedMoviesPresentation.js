import React from "react";
import { BASE_URL, POSTER_SIZES } from "store/reducers/reducer-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./suggested-movies.css";
import { useState } from "react";
export default function SuggestedMoviesPresentation({
  atTheCinemas,
  latestMovies,
  fetching,
  randomMovies,
  trendyMoviesHandler,
  latestMoviesHandlers,
  isLatestMoviesCalled,
  isTrendyMoviesCalled,
  isOscarMovies2012Called,
  oscarsMoviesHandler,
  atTheCinemasHandler,
  isAtTheCinemas
}) {
  const [showOscars, setShowOscars] = useState(false);
  const [oscars_2009, setOscars_2009] = useState(false);
  const [oscars_2010, setOscars_2010] = useState(false);
  const [oscars_2011, setOscars_2011] = useState(false);
  const [oscars_2012, setOscars_2012] = useState(false);
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
          latestMoviesHandlers={latestMoviesHandlers}
          isLatestMoviesCalled={isLatestMoviesCalled}
          isTrendyMoviesCalled={isTrendyMoviesCalled}
          isOscarMovies2012Called={isOscarMovies2012Called}
          isAtTheCinemas={isAtTheCinemas}
          oscars_2009={oscars_2009}
          oscars_2010={oscars_2010}
          oscars_2011={oscars_2011}
          oscars_2012={oscars_2012}
          setOscars_2009={setOscars_2009}
          setOscars_2010={setOscars_2010}
          setOscars_2011={setOscars_2011}
          setOscars_2012={setOscars_2012}
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

export const FilterMoviesComponent = ({
  trendyMoviesHandler,
  oscarsMoviesHandler,
  showOscars,
  setShowOscars,
  atTheCinemasHandler,
  latestMoviesHandlers,
  isLatestMoviesCalled,
  isTrendyMoviesCalled,
  isOscarMovies2012Called,
  isAtTheCinemas,
  oscars_2012,
  setOscars_2012,
  oscars_2011,
  setOscars_2011,
  oscars_2010,
  setOscars_2010,
  oscars_2009,
  setOscars_2009
}) => {
  return (
    <div className="float-left filter-movies-component">
      <p
        className={(isTrendyMoviesCalled && "active-link-bg") || "menu-items"}
        onClick={() => {
          trendyMoviesHandler();
          setOscars_2012(false);
          setOscars_2011(false);
          setOscars_2010(false);
          setOscars_2009(false);
          setShowOscars(false);
        }}
      >
        Top Trendy Movies
      </p>

      <p className="menu-items" onClick={() => setShowOscars(!showOscars)}>
        Oscars
      </p>
      {showOscars ? (
        <>
          {/* <p
            className={
              (isOscarMovies2012Called && "active-link-bg") || "menu-items"
            }
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          > */}
          <p
            className={
              (isOscarMovies2012Called &&
                oscars_2012 &&
                "active-link-submenu-bg") ||
              "menu-items"
            }
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
              setOscars_2012(true);
              setOscars_2011(false);
              setOscars_2010(false);
              setOscars_2009(false);
            }}
          >
            2012 Oscar Nominations
          </p>
          <p
            className={
              (oscars_2011 && "active-link-submenu-bg") || "menu-items"
            }
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
              setOscars_2012(false);
              setOscars_2011(true);
              setOscars_2010(false);
              setOscars_2009(false);
            }}
          >
            2011 Oscar Nominations
          </p>
          <p
            className={
              (oscars_2010 && setOscars_2010 && "active-link-submenu-bg") ||
              "menu-items"
            }
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
              setOscars_2012(false);
              setOscars_2011(false);
              setOscars_2010(true);
              setOscars_2009(false);
            }}
          >
            2010 Oscar Nominations
          </p>
          <p
            className={
              (oscars_2009 && setOscars_2009 && "active-link-submenu-bg") ||
              "menu-items"
            }
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
              setOscars_2012(false);
              setOscars_2011(false);
              setOscars_2010(false);
              setOscars_2009(true);
            }}
          >
            2009 Oscar Nominations
          </p>
        </>
      ) : (
        <>
          <p
            className={(isAtTheCinemas && "active-link-bg") || "menu-items"}
            onClick={atTheCinemasHandler}
          >
            At the Cinemas
          </p>
          <p
            className={
              (isLatestMoviesCalled && "active-link-bg") || "menu-items"
            }
            onClick={latestMoviesHandlers}
          >
            Latest Movies
          </p>
        </>
      )}
    </div>
  );
};

export const SuggestedMoviesGallery = ({ randomMovies }) => {
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
        <tr key={index}>
          <td>{index}</td>
          <td className="movie-title-style">{movie.title}</td>
          <td>{movie.overview}</td>
          <td>{movie.vote_count}</td>
          <td>{movie.release_date}</td>
        </tr>
      );
    });
  return (
    !!randomMovies.length && (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Synopsis</th>
            <th>Votes</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>{movieList}</tbody>
      </table>
    )
  );
};
