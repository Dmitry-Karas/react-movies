import { useState, useEffect } from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import { SearchForm } from 'components/SearchForm/SearchForm'
import { MovieDetailsView } from './MovieDetailsView'
import { TmdbAPI } from 'services/apiService'

export const MoviesView = () => {
  const { url } = useRouteMatch()

  return (
    <>
      <h1>MOVIES</h1>
      <SearchForm />

      <Route path="movies" />
    </>
  )
}
