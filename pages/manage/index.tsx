import Admin from '@/components/screens/admin/home/admin'
import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
  return (
    <Admin />
  )
}

AdminPage.isOnlyAdmin = false

export default AdminPage