import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Section from "components/Section/Section";
import PageLoader from "components/Loaders/PageLoader/PageLoader";

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
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/">
            <Container>
              <Section>
                <HomePage />
              </Section>
            </Container>
          </Route>

          <Route exact path="/movies">
            <Container>
              <Section>
                <MoviesPage />
              </Section>
            </Container>
          </Route>

          <Route path="/movies/:movieId">
            <Container>
              <Section>
                <MovieDetailsPage />
              </Section>
            </Container>
          </Route>

          <Route>
            <Container>
              <Section>
                <HomePage />
              </Section>
            </Container>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
