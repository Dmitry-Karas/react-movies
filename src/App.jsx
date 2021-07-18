import { Route, Switch } from 'react-router-dom'
import { AppBar } from './components/AppBar/AppBar'
import { Container } from './components/Container/Container'
import { HomeView } from './views/HomeView'
import { MoviesView } from './views/MoviesView'
import { MovieDetailsView } from './views/MovieDetailsView'

export const App = () => {
  return (
    <>
      <AppBar />

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
            <h1>404 Page not found :(</h1>
          </Container>
        </Route>
      </Switch>
    </>
  )
}
