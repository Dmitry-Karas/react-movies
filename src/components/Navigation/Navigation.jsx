import { NavLink } from 'react-router-dom'
import { Nav, List, Item } from './Navigation.styled'

const Navigation = () => {
  return (
    <Nav>
      <List>
        <Item>
          <NavLink
            exact
            to="/"
            className="navLink"
            activeClassName="activeLink"
          >
            Home
          </NavLink>
        </Item>

        <Item>
          <NavLink
            to="/movies"
            className="navLink"
            activeClassName="activeLink"
          >
            Movies
          </NavLink>
        </Item>
      </List>
    </Nav>
  )
}

export default Navigation
