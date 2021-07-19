import { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { API } from "constants/API";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import defaultImage from "images/defaultImage.png";
import IconButton from "components/IconButton/IconButton";
import {
  MovieWrapper,
  ButtonWrapper,
  Image,
  ContentWrapper,
  MovieTitle,
  Info,
  List,
  Item,
  Title,
  Rating,
  Content,
  TitleH3,
  Overview,
  AdditionalLinksWrapper,
} from "./MovieDetails.styled";

const MovieDetails = ({
  posterPath,
  title,
  originalTitle,
  genres,
  releaseDate,
  rating,
  voteCount,
  popularity,
  overview,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { url } = useRouteMatch();

  return (
    <>
      <ButtonWrapper>
        <IconButton>
          <IoArrowBackCircleOutline size="50" />
          BACK
        </IconButton>
      </ButtonWrapper>
      <MovieWrapper>
        <Image
          src={
            posterPath && isLoaded
              ? `${API.IMAGE_URL}/original${posterPath}`
              : defaultImage
          }
          alt={title}
          onLoad={() => setIsLoaded(true)}
          width="300"
          height="450"
        />

        <ContentWrapper>
          <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>

          <Info>
            <List>
              <Item>
                <Title>Vote / Votes</Title>
                <Content>
                  <Rating>{rating}</Rating> / {voteCount}
                </Content>
              </Item>

              <Item>
                <Title>Popularity</Title>
                <Content>{popularity}</Content>
              </Item>

              <Item>
                <Title>Original Title</Title>
                <Content>{originalTitle}</Content>
              </Item>

              <Item>
                <Title>Genres</Title>
                <Content>{genres}</Content>
              </Item>
            </List>
          </Info>

          <TitleH3>About</TitleH3>

          <Overview>{overview}</Overview>

          <AdditionalLinksWrapper>
            <NavLink
              to={`${url}/cast`}
              className="infoLink"
              activeClassName="infoLinkActive"
            >
              Cast
            </NavLink>

            <NavLink
              to={`${url}/reviews`}
              className="infoLink"
              activeClassName="infoLinkActive"
            >
              Reviews
            </NavLink>
          </AdditionalLinksWrapper>
        </ContentWrapper>
      </MovieWrapper>
    </>
  );
};

MovieDetails.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDetails;
