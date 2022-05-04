import React, { useEffect, useState } from "react";
import { TRENDING_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from "../API";
import Movie from "../Movie/Movie";
const Movies = ({ query }) => {
  const [moviesInfo, setMoviesInfo] = useState([]);
  useEffect(() => {
    let url = "";
    if (query === "upcoming") url = UPCOMING_MOVIES;
    if (query === "trending") url = TRENDING_MOVIES;
    if (query === "top_rated") url = TOP_RATED_MOVIES;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMoviesInfo(data.results);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);
  return (
    <div className="ml-5 mr-5">
      <div className="row row-cols-md-3 g-3 justify-content-center mt-2">
        {moviesInfo.map((movie) => (
          <Movie movie={movie} key={movie.id}></Movie>
        ))}
      </div>
    </div>
  );
};

export default Movies;
