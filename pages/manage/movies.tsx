import MovieList from '@/components/screens/admin/movies/movie-list'
import { NextPageAuth } from '@/shared/types/auth.types'

const Movies: NextPageAuth = () => {
  return (
    <MovieList />
  )
}

Movies.isOnlyAdmin = false

export default Movies