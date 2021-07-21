import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { Notify } from "utils/notifications";
import Pagination from "components/Pagination/Pagination";
import SearchForm from "components/SearchForm/SearchForm";
import MovieList from "components/MovieList/MovieList";
import MovieListLoader from "components/Loaders/MovieListLoader/MovieListLoader";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [status, setStatus] = useState("idle");

  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("query");
  const currentPage = Number(new URLSearchParams(location.search).get("page"));

  useEffect(() => {
    if (!searchQuery) return;
    (async () => {
      setStatus("pending");

      try {
        const data = await TmdbAPI.getMoviesByQuery(searchQuery, currentPage);
        const { results, total_pages } = data;

        if (!results.length) {
          Notify.error("Oops!", "No results found :(", 2500);

          throw new Error("No results found for this query");
        }

        setMovies(results);
        setPageCount(total_pages);
        setStatus("resolved");
      } catch (error) {
        console.log(error);

        setStatus("rejected");
      }
    })();
  }, [currentPage, searchQuery]);

  const handleSubmit = (query) => {
    if (!query || query === searchQuery) return;

    setMovies([]);

    history.push({
      ...location,
      search: `query=${query}&page=${1}`,
    });
  };

  const handlePageClick = ({ selected }) => {
    history.push({
      ...location,
      search: `query=${searchQuery}&page=${selected + 1}`,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <Pagination
            onClick={handlePageClick}
            initialPage={currentPage}
            pageCount={pageCount}
          />
        </>
      );

    case "rejected":
      return <SearchForm onSubmit={handleSubmit} />;

    default:
      return;
  }
};

export default MoviesPage;
