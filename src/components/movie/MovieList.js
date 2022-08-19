import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "configs";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

function ErrorBoundaryFallback() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong. Please try again later.
    </p>
  );
}

export default withErrorBoundary(MovieList, {
  ErrorBoundaryFallback,
});
