import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TmdbAPI } from 'services/apiService'
import { API } from 'constants/API'
import { Notify } from 'utils/notifications'
import defaultImage from 'images/defaultImage.png'
import {
  List,
  Item,
  Image,
  Info,
  TitleH3,
  Text,
  NotFoundMessage,
} from './Cast.styled'
import { CastLoader } from './CastLoader'

export const Cast = () => {
  const [actors, setActors] = useState([])
  const [status, setStatus] = useState('idle')
  const [isLoaded, setIsLoaded] = useState(false)

  const { movieId } = useParams()

  useEffect(() => {
    setStatus('pending')

    const getMovieCredits = async () => {
      try {
        const credits = await TmdbAPI.getMovieCredits(movieId)

        if (!credits.length) {
          throw new Error('No credits found')
        }

        const movieActors = credits.map((credit) => {
          return {
            id: credit.id,
            name: credit.name,
            photo: credit.profile_path,
            character: credit.character,
          }
        })

        setActors(movieActors)
        setStatus('resolved')

        window.scrollTo({ top: 600, behavior: 'smooth' })
      } catch (error) {
        setStatus('rejected')

        Notify.error('Cast not found')
      }
    }

    getMovieCredits()
  }, [movieId])

  return (
    <>
      {status === 'pending' && <CastLoader />}

      {status === 'resolved' && (
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
                  <Text>{character || 'Unknown'}</Text>
                </Info>
              </Item>
            )
          })}
        </List>
      )}

      {status === 'rejected' && (
        <NotFoundMessage>
          We don't have any cast for this movie.
        </NotFoundMessage>
      )}
    </>
  )
}
