import { useState, useEffect } from 'react'
import { List } from './MovieList.styled'
import { MovieItem } from '../MovieItem/MovieItem'
import { TmdbAPI } from '../../services/apiService'

export const MovieList = ({ movies }) => {
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
              releaseDate={release_date}
              rating={vote_average}
              genres={movieGenres}
            ></MovieItem>
          )
        },
      )}
      <MovieItem />
    </List>
  )
}
