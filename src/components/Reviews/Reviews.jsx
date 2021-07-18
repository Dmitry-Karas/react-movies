import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TmdbAPI } from 'services/apiService'
import { API } from 'constants/API'
import { Notify } from 'utils/notifications'
import defaultImage from 'images/defaultImage.png'
import {
  ReviewList,
  ReviewItem,
  ReviewAuthorWrapper,
  ReviewAuthorAvatar,
  ReviewAuthorName,
  ReviewContent,
  NotFoundMessage,
} from './Reviews.styled'
import ReviewsLoader from './ReviewsLoader'

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([])
  const [status, setStatus] = useState('idle')

  const { movieId } = useParams()

  useEffect(() => {
    setStatus('pending')

    const getMovieReviews = async () => {
      try {
        const reviews = await TmdbAPI.getMovieReviews(movieId)

        if (!reviews.length) {
          throw new Error('No reviews found')
        }

        setMovieReviews(reviews)
        setStatus('resolved')

        window.scrollTo({ top: 600, behavior: 'smooth' })
      } catch (error) {
        setStatus('rejected')

        Notify.error('No reviews found')
      }
    }

    getMovieReviews()
  }, [movieId])

  return (
    <>
      {status === 'pending' && <ReviewsLoader />}

      {status === 'resolved' && (
        <ReviewList>
          {movieReviews.map(({ id, author, author_details, content }) => {
            const avatarPath = author_details.avatar_path
            let avatar = null

            if (author_details.avatar_path) {
              avatar = avatarPath.startsWith('/http')
                ? avatarPath.slice(1)
                : `${API.IMAGE_URL}/w200/${avatarPath}`
            } else {
              avatar = defaultImage
            }

            return (
              <ReviewItem key={id}>
                <ReviewAuthorWrapper>
                  <ReviewAuthorAvatar src={avatar} width="50" height="50" />
                  <ReviewAuthorName>{author}</ReviewAuthorName>
                </ReviewAuthorWrapper>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            )
          })}
        </ReviewList>
      )}

      {status === 'rejected' && (
        <NotFoundMessage>
          We don't have any reviews for this movie.
        </NotFoundMessage>
      )}
    </>
  )
}

export default Reviews
