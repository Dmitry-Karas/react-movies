import { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'
import { TmdbAPI } from 'services/apiService'
import { MovieDetails } from 'components/MovieDetails/MovieDetails'
import { Cast } from 'components/Cast/Cast'
import { Reviews } from 'components/Reviews/Reviews'
import { MovieDetailsLoader } from 'components/MovieDetails/MovieDetailsLoader'

export const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null)
  const [status, setStatus] = useState('idle')

  const { movieId } = useParams()
  const { path } = useRouteMatch()

  useEffect(() => {
    setStatus('pending')

    TmdbAPI.getMovieDetails(movieId)
      .then(setMovie)
      .then(() => setStatus('resolve'))
      .catch(console.log)
  }, [movieId])

  switch (status) {
    case 'idle':
      return <></>

    case 'pending':
      return <MovieDetailsLoader />

    case 'resolve':
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
      } = movie

      const movieGenres = genres.map((genre) => genre.name).join(', ')

      return (
        <>
          <MovieDetails
            id={id}
            posterPath={poster_path}
            title={title}
            originalTitle={original_title}
            genres={movieGenres || '\u2015'}
            releaseDate={release_date || '\u2015'}
            rating={vote_average}
            voteCount={vote_count}
            popularity={popularity}
            overview={overview}
          />

          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </>
      )

    default:
      return
  }
}
