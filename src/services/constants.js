/**************************************************/
/*App URL Pages*/
/**************************************************/

export const TOWACTH_URLS = {
  LOADING: ""
};

/**************************************************/
/*API URLs*/
/**************************************************/
export const API_URL = {
  SUGGESTED_MOVIES:
    "https://api.themoviedb.org/3/list/28?language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  LATEST_MOVIES:
    "https://api.themoviedb.org/3/trending/movie/week?api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  DAILY_TRENDING_MOVIES:
    "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  SEARCH_MOVIES:
    "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26&query=",
  CINEMAS_MOVIES:
    "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26"
  // ROMANCE: "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  // ACTION: ""
  //DAILY_TRENDING_MOVIES:
  // "https://api.themoviedb.org/3/trending/movie/day?api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
};
export const OSCAR_API_URLS = {
  OSCAR_2012:
    "https://api.themoviedb.org/3/list/2?language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  OSCAR_2011:
    "https://api.themoviedb.org/3/list/4?language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  OSCAR_2010:
    "https://api.themoviedb.org/3/list/8?language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26",
  OCSAR_2009:
    "https://api.themoviedb.org/3/list/9?language=en-US&api_key=2afb1d4ebd6b0b7548fc20dd30d0ac26"
};

/**************************************************/
/*HTTP METHODS*/
/**************************************************/
export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};
/**************************************************/
/*HTTP METHODS*/
/**************************************************/
export const SESSION_KEY_ENUM = {
  API_KEY: "api_key",
  JWT_KEY: "jwt_key"
};
export const OSCARS = {
  NOMINATIONS_2012: "2012 Oscar Nominations",
  NOMINATIONS_2011: "2011 Oscar Nominations",
  NOMINATIONS_2010: "2010 Oscar Nominations",
  NOMINATIONS_2009: "2009 Oscar Nominations"
};
