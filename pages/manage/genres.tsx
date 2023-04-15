import GenresList from '@/components/screens/admin/genres/genres-list'
import { NextPageAuth } from '@/shared/types/auth.types'

const Genres: NextPageAuth = () => {
  return (
    <GenresList />
  )
}

Genres.isOnlyAdmin = false

export default Genres