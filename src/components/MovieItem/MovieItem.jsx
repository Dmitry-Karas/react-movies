import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Item, Image, TitleH2, Info, Genres, Rating } from './MovieItem.styled'
import { API } from '../../constants/API'
import defaultImage from '../../images/defaultImage.png'

export const MovieItem = ({
  id,
  posterPath,
  title,
  genres,
  releaseDate,
  rating,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!id) return false

  return (
    <Item>
      <Link to={`/movies/${id}`}>
        {posterPath && (
          <Image
            src={isLoaded ? `${API.IMAGE_URL}/w300${posterPath}` : defaultImage}
            alt={title}
            onLoad={() => setIsLoaded(true)}
            width="300"
            height="450"
          />
        )}
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
