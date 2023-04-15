import AdminNavigation from '@/components/ui/admin-navigation/admin-navigation'
import AdminHeader from '@/components/ui/admin-table/admin-header/admin-header'
import AdminTable from '@/components/ui/admin-table/admin-table/admin-table'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'

import { useActors } from './useActors'

const ActorsList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useActors()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Count Movies']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default ActorsList
