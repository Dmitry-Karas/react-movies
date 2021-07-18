import axios from 'axios'
import { API } from '../constants/API'

export class TmdbAPI {
  static async getTrendingMovies() {
    try {
      const { data } = await axios.get(
        `${API.BASE_URL}/trending/movie/week?api_key=${API.KEY}`,
      )

      return data.results
    } catch (error) {
      console.log(error)
    }
  }

  static async getMoviesByQuery(query) {
    try {
      const { data } = await axios.get(
        `${API.BASE_URL}/search/movie/?api_key=${API.KEY}&query=${query}`,
      )

      return data.results
    } catch (error) {
      console.log(error)
    }
  }

  static async getMovieDetails(id) {
    try {
      const { data } = await axios.get(
        `${API.BASE_URL}/movie/${id}?api_key=${API.KEY}`,
      )

      return data
    } catch (error) {
      console.log(error)
    }
  }

  static async getMovieCredits(id) {
    try {
      const { data } = await axios.get(
        `${API.BASE_URL}/movie/${id}/credits?api_key=${API.KEY}`,
      )

      return data.cast
    } catch (error) {
      console.log(error)
    }
  }

  static async getMovieReviews(id) {
    try {
      const { data } = await axios.get(
        `${API.BASE_URL}/movie/${id}/reviews?api_key=${API.KEY}`,
      )

      return data.results
    } catch (error) {
      console.log(error)
    }
  }

  static async getGenreList() {
    return await axios(`${API.BASE_URL}/genre/movie/list?api_key=${API.KEY}`)
  }
}
