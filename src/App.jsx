import { lazy, Suspense } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  Link,
} from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "HomeView" */)
);

const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName: "MoviesView" */)
);

const MovieDetailsView = lazy(() =>
  import("./views/MovieDetailsView" /* webpackChunkName: "MovieDetailsView" */)
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>loading</h1>}>
        <Switch>
          <Route exact path="/">
            <Container>
              <HomeView />
            </Container>
          </Route>

          <Route exact path="/movies">
            <Container>
              <MoviesView />
            </Container>
          </Route>

          <Route path="/movies/:movieId">
            <Container>
              <MovieDetailsView />
            </Container>
          </Route>

          <Route>
            <Container>
              <HomeView />
            </Container>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
