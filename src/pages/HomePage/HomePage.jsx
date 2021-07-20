import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { Notify } from "utils/notifications";
import MovieList from "components/MovieList/MovieList";
import MovieListLoader from "components/MovieList/MovieListLoader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");

  const history = useHistory();
  const { isExact } = useRouteMatch();

  useEffect(() => {
    if (!isExact) {
      history.push("/");

      Notify.warning(
        "404 Page not found",
        "You have been redirected to the home page",
        4000
      );
    }

    setStatus("pending");
    (async () => {
      try {
        const results = await TmdbAPI.getTrendingMovies();

        setMovies(results);
        setStatus("resolved");
      } catch (error) {
        console.error(error);

        setStatus("idle");
      }
    })();
  }, [history, isExact]);

  switch (status) {
    case "idle":
      return <></>;

    case "pending":
      return <MovieListLoader />;

    case "resolved":
      return <>{movies && <MovieList movies={movies} />}</>;

    default:
      return;
  }
};

export default HomePage;
