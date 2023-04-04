import UserList from '@/components/screens/admin/users/user-list'
import { NextPageAuth } from '@/shared/types/auth.types'

const Users: NextPageAuth = () => {
  return (
    <UserList />
  )
}

Users.isOnlyAdmin = false

export default Users