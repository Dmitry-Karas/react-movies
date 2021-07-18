import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { List, Item, Image, Info, TitleH3, Text } from './Cast.styled'
import { CastLoader } from './CastLoader'
import { TmdbAPI } from '../../services/apiService'
import { API } from '../../constants/API'
import defaultImage from '../../images/defaultImage.png'

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
        console.log(error)
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
    </>
  )
}
