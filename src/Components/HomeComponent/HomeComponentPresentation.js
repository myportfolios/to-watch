import React from "react";
import { BASE_URL, POSTER_SIZES } from "store/reducers/reducer-constants";
import "./home_component.css";

const HomeComponentPresentation = ({ movies }) => {
  return (
    <div className="App style-components">
      {/* <h2 className="two-text">2<span className="watch-text">Watch</span></h2> */}
      <div className="movieTitle row">
        <MovieAndTitleComponent className="col-md-4 col-sm-2" movies={movies} />
      </div>
      <h2 className="two-text">
        Movies 2<span className="watch-text">Watch</span>
      </h2>
      <p className="para-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        ultricies felis. Quisque placerat mi ut lorem blandit, ut finibus est
        imperdiet. Proin ligula augue, dignissim at purus a, venenatis fermentum
        leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Praesent lacinia dolor ac aliquam maximus. Maecenas quis nibh et dui
        scelerisque consectetur ac nec nibh. Vestibulum lacinia quis ante quis
        sollicitudin. Proin venenatis turpis ac urna scelerisque, tristique
        lobortis est lacinia. Etiam id lorem erat. Phasellus scelerisque mi et
        elit semper, et facilisis lacus tempus. Sed nulla ligula, maximus vel
        quam et, auctor commodo eros. Vestibulum sollicitudin nunc dolor, quis
        auctor purus malesuada vel. Mauris eleifend et justo in placerat.
        Quisque in sem at nulla viverra viverra nec eget ex.
      </p>
    </div>
  );
};

export default HomeComponentPresentation;

export const MovieAndTitleComponent = ({ movies }) => {
  let moviesJSX = movies.map(movie => {
    let { title, posterPath } = movie;
    return (
      <div key={title}>
        {/* <img className="img-thumbnail videoPlaceholder" alt="poster" src={movie.poster_path} /> */}
        <img
          className="img-thumbnail videoPlaceholder"
          alt="poster"
          src={`${BASE_URL}${POSTER_SIZES}${posterPath}`}
        />
        <div className="title">{title}</div>
      </div>
    );
  });

  return <div className="flex">{moviesJSX}</div>;
};
