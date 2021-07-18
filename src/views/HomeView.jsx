import { useState, useEffect } from 'react'
import { TmdbAPI } from 'services/apiService'
import MovieList from 'components/MovieList/MovieList'
import MovieListLoader from 'components/MovieList/MovieListLoader'

const HomeView = () => {
  const [movies, setMovies] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    setStatus('pending')

    TmdbAPI.getTrendingMovies()
      .then(setMovies)
      .then(() => setStatus('resolved'))
      .catch(console.log)
  }, [])

  switch (status) {
    case 'idle':
      return <></>

    case 'pending':
      return <MovieListLoader />

    case 'resolved':
      return (
        <>
          <MovieList movies={movies} />
        </>
      )

    default:
      return
  }
}

export default HomeView
