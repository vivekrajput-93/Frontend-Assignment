import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import MovieCard from "./MovieCard";
import "../CSS/Movie.css";

const Movie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://movies-app.prakashsakari.repl.co/api/movies";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>
        <span>Movie</span> App
      </h1>
      {loading ? (
        <div className="spinner-box">
          <ClockLoader />
        </div>
      ) : (
        <>
          <div id="card">
            {data.map((movie) => (
              <MovieCard
                key={movie.id}
                name={movie.name}
                img={movie.img_link}
                year={movie.year}
                rating={movie.imdb_rating}
                duration={movie.duration}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Movie;
