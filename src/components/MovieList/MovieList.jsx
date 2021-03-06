import PropTypes, { arrayOf } from 'prop-types'
import MovieItem from 'components/MovieItem/MovieItem'
import { useState, useEffect } from 'react'
import { TmdbAPI } from 'services/apiService'
import { List } from './MovieList.styled'

const MovieList = ({ movies }) => {
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    TmdbAPI.getGenreList()
      .then(({ data }) => setGenreList(data.genres))
      .catch(console.log)
  }, [])

  return (
    <List>
      {movies.map(
        ({ id, poster_path, title, release_date, vote_average, genre_ids }) => {
          const movieGenres = genreList
            .filter((genre) => genre_ids.includes(genre.id))
            .map((genre) => genre.name)
            .join(', ')

          return (
            <MovieItem
              key={id}
              id={id}
              posterPath={poster_path}
              title={title}
              releaseDate={release_date || '\u2015'}
              rating={vote_average}
              genres={movieGenres || '\u2015'}
            />
          )
        },
      )}
    </List>
  )
}

MovieList.propTypes = {
  movies: arrayOf(PropTypes.object.isRequired).isRequired,
}

export default MovieList
