import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "configs";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !error && !data;
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      {isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton />
          </SwiperSlide>
        </Swiper>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
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
