import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-20 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Now Playing
        </h2>
        <MovieList />
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Top rated
        </h2>
        <MovieList type="top_rated" />
      </section>
      <section className="pb-20 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MovieList type="popular" />
      </section>
    </Fragment>
  );
};

export default HomePage;
