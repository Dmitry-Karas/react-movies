import { useState, useEffect, lazy, Suspense } from "react";
import { Route, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MovieDetails from "components/MovieDetails/MovieDetails";
import MovieDetailsLoader from "components/MovieDetails/MovieDetailsLoader";
import IconButton from "components/IconButton/IconButton";
import { Notify } from "utils/notifications";
import { BackButton } from "./MovieDetailsPage.styled";

const Cast = lazy(() =>
  import("components/Cast/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = () => {
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
            "You have been redirected to the home page",
            4000
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

  const handleBackButtonClick = () => {
    history.goBack();
  };

  switch (status) {
    case "idle":
      return <></>;

    case "pending":
      return <MovieDetailsLoader />;

    case "resolved":
      const genres = movie.genres.map((genre) => genre.name).join(", ");

      return (
        <>
          <BackButton>
            <IconButton onClick={handleBackButtonClick}>
              <IoArrowBackCircleOutline size="50" />
              BACK
            </IconButton>
          </BackButton>
          <MovieDetails
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            originalTitle={movie.original_title}
            genres={genres || "\u2015"}
            releaseDate={movie.release_date || "\u2015"}
            rating={movie.vote_average}
            voteCount={movie.vote_count}
            popularity={movie.popularity}
            overview={movie.overview}
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

export default MovieDetailsPage;
