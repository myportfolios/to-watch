import { GET_MOVIES } from "../actions/types";
import mockData from "../../utils/movies-mock-data"

// const initialState = [
//   movies : [{
//     title: "Us",
//     Year: "2019",
//     Rated: "R",
//     Released: "22 Mar 2019",
//     Genre: "Horror, Thriller",

//     Actors: "Lupita Nyong'o, Winston Duke, Elisabeth Moss, Tim Heidecker",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
//   },
//   {
//     Title: "The Avengers",
//     Year: "2012",
//     Rated: "PG-13",
//     Released: "04 May 2012",
//     Genre: "Action, Adventure, Sci-Fi",
//     Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",

//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
//   }
//  ]
// ];

const moviesReducer = (state =  mockData, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        

      };
    default:
      return state;
  }
};
export default moviesReducer; 
