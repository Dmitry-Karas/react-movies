import { useState, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { Notify } from "utils/notifications";
import Pagination from "components/Pagination/Pagination";
import MovieList from "components/MovieList/MovieList";
import MovieListLoader from "components/Loaders/MovieListLoader/MovieListLoader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [status, setStatus] = useState("idle");

  const history = useHistory();
  const location = useLocation();
  const { isExact } = useRouteMatch();

  const currentPage =
    Number(new URLSearchParams(location.search).get("page")) || 1;

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
        const data = await TmdbAPI.getTrendingMovies(currentPage);
        const { results, total_pages } = data;

        setMovies(results);
        setPageCount(total_pages);
        setStatus("resolved");
      } catch (error) {
        console.error(error);

        setStatus("idle");
      }
    })();
  }, [currentPage, history, isExact]);

  const handlePageClick = ({ selected }) => {
    history.push({
      ...location,
      search: selected === 0 ? "" : `page=${selected + 1}`,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  switch (status) {
    case "idle":
      return <></>;

    case "pending":
      return <MovieListLoader />;

    case "resolved":
      return (
        <>
          {movies && <MovieList movies={movies} />}
          <Pagination
            onClick={handlePageClick}
            initialPage={currentPage}
            pageCount={pageCount}
          />
        </>
      );

    default:
      return;
  }
};

export default HomePage;
