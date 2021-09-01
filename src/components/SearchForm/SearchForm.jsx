import PropTypes from "prop-types";
import { Form, Input, Label, Button } from "./SearchForm.styled";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchInput = e.target.elements.movieSearch;

    onSubmit(searchInput.value);

    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="movieSearch"
        value={value}
        id="movieSearch"
        placeholder="The Fast and the Furious"
        autoComplete="off"
        onChange={handleInputChange}
      />
      <Label htmlFor="movieSearch">Enter the movie name</Label>
      <Button type="submit" disabled={!value}>
        <BsSearch />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
