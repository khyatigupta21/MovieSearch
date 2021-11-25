import { useState, useEffect } from "react";
import { GetRequest, GetRepos } from "./Utilities/Network/index"
import UserCards from "./component/UserCards";
import Button from "./component/Button";
import "./App.css";

const MovieSearch = (props: any) => {
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [movieResult, setMovieResult] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);
  const _handleSearchProfile = async () => {
    const apiResponse = await GetRequest(
      `https://www.omdbapi.com/?s=${movieName}&apikey=8e2b6ab4`
    );
    if (!apiResponse) {
      return;
    }
    setMovieList(apiResponse);
    setMovieResult(apiResponse.totalResults);
    setMovieSearch(apiResponse.Search);
  };
  //  console.log("Line no 15", movieList);
  // console.log("Line no 15", movieResult);
  // console.log("Line no 15", movieSearch);
  const _renderMovieList = () => {
    console.log("Inside_renderMovieList ");
    return movieSearch.map((item: any) => {
      return (
        <UserCards key={item.imdbID} label={item.Title} image={item.Poster} />
      );
    });
  };
    
    const _handlePagination = async(page: number) => {
        console.log("Page no is ", page);
        const apiResponse = await GetRequest(
            `https://www.omdbapi.com/?s=${movieName}&page=${page}&apikey=8e2b6ab4`);
        if (!apiResponse) {
            return;
        }
        setMovieList(apiResponse);
        setMovieResult(apiResponse.totalResults);
        setMovieSearch(apiResponse.Search);
        
};
const _renderButtons = () => {
const views = [];
const parsed = parseInt(movieResult);

for ( let i =0; i<parsed/10; i++){
    views.push(
        <Button label={i+1} onClick={()=>_handlePagination(i+1)}></Button>
    );
} 

return views;
}

  //   const _movieSearchList = movieSearch.map((movieSearch: any) => (
  //     <li key={movieSearch.imdbID}>{movieSearch.Title}</li>
  //   ));
  return (
      <div className="App">
          <div>
              <h1>Search Movies</h1>
          </div>
      <div className="SearchContainer">
        <input
          className="movieSearch"
          type="text"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <button onClick={_handleSearchProfile}>Search</button>
      </div>
          <div className="movieList">{_renderMovieList()}</div>
          <div>{_renderButtons()}</div>
    </div>
  );
};

export default MovieSearch;
