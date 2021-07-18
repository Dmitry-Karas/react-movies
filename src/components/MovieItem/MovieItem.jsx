import { Link } from 'react-router-dom'
import { useState } from 'react'
import { API } from 'constants/API'
import PropTypes from 'prop-types'
import defaultImage from 'images/defaultImage.png'
import { Item, Image, TitleH2, Info, Genres, Rating } from './MovieItem.styled'

export const MovieItem = ({
  id,
  posterPath,
  title,
  genres,
  releaseDate,
  rating,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Item>
      <Link to={`/movies/${id}`}>
        <Image
          src={
            posterPath && isLoaded
              ? `${API.IMAGE_URL}/w300${posterPath}`
              : defaultImage
          }
          alt={title}
          onLoad={() => setIsLoaded(true)}
          width="300"
          height="450"
        />
      </Link>

      <TitleH2>{title}</TitleH2>

      <Info>
        <Genres>
          {genres} | {releaseDate.substring(0, 4)}
        </Genres>

        <Rating>{rating}</Rating>
      </Info>
    </Item>
  )
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
