import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { API } from "constants/API";
import { Notify } from "utils/notifications";
import defaultImage from "images/defaultImage.png";
import {
  ReviewList,
  ReviewItem,
  ReviewAuthorWrapper,
  ReviewAuthorAvatar,
  ReviewAuthorName,
  ReviewContent,
  NotFoundMessage,
} from "./Reviews.styled";
import ReviewsLoader from "./ReviewsLoader";

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [status, setStatus] = useState("idle");
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus("pending");
    (async () => {
      try {
        const reviews = await TmdbAPI.getMovieReviews(movieId);

        if (!reviews.length) {
          Notify.info("No reviews yet");

          throw new Error("No reviews found");
        }

        setMovieReviews(reviews);
        setStatus("resolved");

        window.scrollTo({ top: 600, behavior: "smooth" });
      } catch (error) {
        console.error(error);

        setStatus("rejected");
      }
    })();
  }, [movieId]);

  const getAvatar = (avatarPath) => {
    let avatar = defaultImage;

    if (avatarPath) {
      avatar = avatarPath.startsWith("/http")
        ? avatarPath.slice(1)
        : `${API.IMAGE_URL}/w200/${avatarPath}`;
    }

    return avatar;
  };

  switch (status) {
    case "idle":
      return <></>;

    case "pending":
      return <ReviewsLoader />;

    case "resolved":
      return (
        <ReviewList>
          {movieReviews.map(({ id, author, author_details, content }) => {
            const avatar = getAvatar(author_details.avatar_path);

            return (
              <ReviewItem key={id}>
                <ReviewAuthorWrapper>
                  <ReviewAuthorAvatar
                    src={isAvatarLoaded ? avatar : defaultImage}
                    width="50"
                    height="50"
                    onLoad={() => setIsAvatarLoaded(true)}
                  />
                  <ReviewAuthorName>{author}</ReviewAuthorName>
                </ReviewAuthorWrapper>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
        </ReviewList>
      );

    case "rejected":
      return (
        <NotFoundMessage>
          We don't have any reviews for this movie.
        </NotFoundMessage>
      );

    default:
      return;
  }
};

export default Reviews;
