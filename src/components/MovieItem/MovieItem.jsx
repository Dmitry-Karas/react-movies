import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { API } from "constants/API";
import PropTypes from "prop-types";
import defaultImage from "images/defaultImage.png";
import { Item, Image, TitleH2, Info, Genres, Rating } from "./MovieItem.styled";

const MovieItem = ({ id, posterPath, title, genres, releaseDate, rating }) => {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  const location = useLocation();

  return (
    <Item>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
      >
        <Image
          src={
            posterPath && isPosterLoaded
              ? `${API.IMAGE_URL}/w300${posterPath}`
              : defaultImage
          }
          alt={title}
          onLoad={() => setIsPosterLoaded(true)}
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
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieItem;
