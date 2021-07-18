import { Form, Input, Label, Button } from './SearchForm.styled'
import { BsSearch } from 'react-icons/bs'

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const searchInput = e.target.elements.movieSearch

    onSubmit(searchInput.value)

    searchInput.value = ''
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="movieSearch"
        id="movieSearch"
        placeholder="The Fast and the Furious"
        autoComplete="off"
      />
      <Label htmlFor="movieSearch">Enter the movie name</Label>
      <Button type="submit">
        Search
        <BsSearch />
      </Button>
    </Form>
  )
}
