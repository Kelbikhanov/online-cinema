import AdminNavigation from '@/components/ui/admin-navigation/admin-navigation'
import AdminHeader from '@/components/ui/admin-table/admin-header/admin-header'
import AdminTable from '@/components/ui/admin-table/admin-table/admin-table'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'

import { useGenres } from './useGenres'

const GenresList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Slug']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default GenresList
