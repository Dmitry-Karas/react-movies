import { useState, useEffect, lazy, Suspense } from "react";
import { Route, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import MovieDetails from "components/MovieDetails/MovieDetails";
import MovieDetailsLoader from "components/MovieDetails/MovieDetailsLoader";
import { Notify } from "utils/notifications";

const Cast = lazy(() =>
  import("components/Cast/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("idle");

  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    setStatus("pending");
    (async () => {
      try {
        const movie = await TmdbAPI.getMovieDetails(movieId);

        if (!movie) {
          history.push("/");

          Notify.warning(
            "404 Page not found",
            "You have been redirected to the home page"
          );

          throw new Error("Movie not found");
        }

        setMovie(movie);
        setStatus("resolved");
      } catch (error) {
        console.error(error);

        setStatus("rejected");
      }
    })();
  }, [history, movieId]);

  switch (status) {
    case "idle":
      return <></>;

    case "pending":
      return <MovieDetailsLoader />;

    case "resolved":
      const {
        id,
        poster_path,
        original_title,
        title,
        vote_average,
        vote_count,
        genres,
        release_date,
        popularity,
        overview,
      } = movie;

      const movieGenres = genres.map((genre) => genre.name).join(", ");

      return (
        <>
          <MovieDetails
            id={id}
            posterPath={poster_path}
            title={title}
            originalTitle={original_title}
            genres={movieGenres || "\u2015"}
            releaseDate={release_date || "\u2015"}
            rating={vote_average}
            voteCount={vote_count}
            popularity={popularity}
            overview={overview}
          />
          <Suspense fallback={<h1>loading</h1>}>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      );

    default:
      return;
  }
};

export default MovieDetailsView;
