import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Genre from "../Genre/Genre";

const Movie = (props) => {
  const { title, poster_path, release_date, genre_ids, vote_average, id } =
    props.movie;
  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="col">
        <div className="card text-center h-100 shadow bg-white p-3 rounded border-0 m-5">
          <img
            className="center"
            src={imgUrl + poster_path}
            style={{ width: "100%" }}
            alt=""
          />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">Release Date: {release_date}</p>
            <p className="card-text">
              Genres:
              {genre_ids.map((genre) => (
                <Genre genre={genre}></Genre>
              ))}
            </p>
            <p className="card-text">Rating: {vote_average}</p>
            <Link to={`/movie/${id}`}>
              <button className="btn btn-primary">
                Explore <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
