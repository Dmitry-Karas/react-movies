import { useState, useEffect } from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import { SearchForm } from 'components/SearchForm/SearchForm'
import { MovieList } from 'components/MovieList/MovieList'
import { TmdbAPI } from 'services/apiService'
import { Notify } from 'utils/notifications'

export const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [status, setStatus] = useState('idle')

  const { url } = useRouteMatch()

  const handleSubmit = (query) => {
    setSearchQuery(query)
  }

  useEffect(() => {
    if (!searchQuery) return

    const getMovies = async () => {
      setStatus('pending')

      try {
        const results = await TmdbAPI.getMoviesByQuery(searchQuery)

        if (!results.length) {
          throw new Error('No results found for this query')
        }

        setMovies(results)
        setStatus('resolved')
      } catch (error) {
        setStatus('rejected')

        Notify.error('No results found')
      }
    }

    getMovies()
  }, [searchQuery])

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {status === 'resolved' && <MovieList movies={movies} />}
      <Route path="movies" />
    </>
  )
}
