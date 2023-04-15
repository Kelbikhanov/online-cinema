import ActorsList from '@/components/screens/admin/actors/actors-list'
import { NextPageAuth } from '@/shared/types/auth.types'

const Actors: NextPageAuth = () => {
  return (
    <ActorsList />
  )
}

Actors.isOnlyAdmin = false

export default Actors