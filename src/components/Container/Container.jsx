import PropTypes from 'prop-types'
import { StyledContainer } from './Container.styled'

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
