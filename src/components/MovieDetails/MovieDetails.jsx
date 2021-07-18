import { useState } from 'react'
import { Link, NavLink, useRouteMatch } from 'react-router-dom'
import {
  MovieWrapper,
  Image,
  ContentWrapper,
  MovieTitle,
  Info,
  InfoList,
  InfoItem,
  InfoTitle,
  Rating,
  InfoContent,
  TitleH3,
  Overview,
  AdditionalLinksWrapper,
} from './MovieDetails.styled'
import { API } from '../../constants/API'
import defaultImage from '../../images/defaultImage.png'

export const MovieDetails = ({
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
  const [isLoaded, setIsLoaded] = useState(false)

  const { url } = useRouteMatch()

  return (
    <>
      <MovieWrapper>
        {posterPath && (
          <Image
            src={
              isLoaded ? `${API.IMAGE_URL}/original${posterPath}` : defaultImage
            }
            alt={title}
            onLoad={() => setIsLoaded(true)}
            width="300"
            height="450"
          />
        )}

        <ContentWrapper>
          <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>

          <Info>
            <InfoList>
              <InfoItem>
                <InfoTitle>Vote / Votes</InfoTitle>
                <InfoContent>
                  <Rating>{rating}</Rating> / {voteCount}
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoTitle>Popularity</InfoTitle>
                <InfoContent>{popularity}</InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoTitle>Original Title</InfoTitle>
                <InfoContent>{originalTitle}</InfoContent>
              </InfoItem>

              <InfoItem>
                <InfoTitle>Genres</InfoTitle>
                <InfoContent>{genres}</InfoContent>
              </InfoItem>
            </InfoList>
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
  )
}
