import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { Notify } from "utils/notifications";
import SearchForm from "components/SearchForm/SearchForm";
import MovieList from "components/MovieList/MovieList";
import MovieListLoader from "components/MovieList/MovieListLoader";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");

    query && setSearchQuery(query);

    if (!searchQuery || !query) {
      setMovies([]);
      return;
    }
    (async () => {
      setStatus("pending");

      try {
        const results = await TmdbAPI.getMoviesByQuery(searchQuery);

        if (!results.length && searchQuery) {
          Notify.error("Oops!", "No results found :(", 2500);

          throw new Error("No results found for this query");
        }

        setMovies(results);
        setStatus("resolved");
      } catch (error) {
        console.log(error);

        setStatus("rejected");
      }
    })();
  }, [location.search, searchQuery]);

  const handleSubmit = (query) => {
    setSearchQuery(query);

    history.push({ ...location, search: `query=${query}` });
  };

  switch (status) {
    case "idle":
      return <SearchForm onSubmit={handleSubmit} />;

    case "pending":
      return (
        <>
          <SearchForm onSubmit={handleSubmit} />
          <MovieListLoader />
        </>
      );

    case "resolved":
      return (
        <>
          <SearchForm onSubmit={handleSubmit} />
          <MovieList movies={movies} />
        </>
      );

    case "rejected":
      return <SearchForm onSubmit={handleSubmit} />;

    default:
      return;
  }
};

export default MoviesPage;
