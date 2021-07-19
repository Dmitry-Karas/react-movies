import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TmdbAPI } from "services/apiService";
import { API } from "constants/API";
import { Notify } from "utils/notifications";
import defaultImage from "images/defaultImage.png";
import {
  List,
  Item,
  Image,
  Info,
  TitleH3,
  Text,
  NotFoundMessage,
} from "./Cast.styled";
import CastLoader from "./CastLoader";

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState("idle");
  const [isLoaded, setIsLoaded] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus("pending");
    (async () => {
      try {
        const cast = await TmdbAPI.getMovieCredits(movieId);

        if (!cast.length) {
          Notify.info("Cast not found");

          throw new Error("Cast not found");
        }

        const movieActors = cast.map((actor) => {
          return {
            id: actor.id,
            name: actor.name,
            photo: actor.profile_path,
            character: actor.character,
          };
        });

        setActors(movieActors);
        setStatus("resolved");

        window.scrollTo({ top: 600, behavior: "smooth" });
      } catch (error) {
        console.error(error);

        setStatus("rejected");
      }
    })();
  }, [movieId]);

  switch (status) {
    case "idle":
      return <></>;

    case "pending":
      return <CastLoader />;

    case "resolved":
      return (
        <List>
          {actors.map(({ id, photo, name, character }) => {
            return (
              <Item key={id}>
                <Image
                  src={
                    photo && isLoaded
                      ? `${API.IMAGE_URL}/w200${photo}`
                      : defaultImage
                  }
                  alt={name}
                  width="200"
                  onLoad={() => setIsLoaded(true)}
                />

                <Info>
                  <TitleH3>Name</TitleH3>
                  <Text>{name}</Text>
                  <TitleH3>Character</TitleH3>
                  <Text>{character || "Unknown"}</Text>
                </Info>
              </Item>
            );
          })}
        </List>
      );

    case "rejected":
      return (
        <NotFoundMessage>
          We don't have any cast for this movie.
        </NotFoundMessage>
      );

    default:
      return;
  }
};

export default Cast;
