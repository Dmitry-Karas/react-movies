import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>loading</h1>}>
        <Switch>
          <Route exact path="/">
            <Container>
              <HomePage />
            </Container>
          </Route>

          <Route exact path="/movies">
            <Container>
              <MoviesPage />
            </Container>
          </Route>

          <Route path="/movies/:movieId">
            <Container>
              <MovieDetailsPage />
            </Container>
          </Route>

          <Route>
            <Container>
              <HomePage />
            </Container>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
