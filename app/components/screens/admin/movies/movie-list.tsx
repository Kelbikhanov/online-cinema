import AdminNavigation from '@/components/ui/admin-navigation/admin-navigation'
import AdminHeader from '@/components/ui/admin-table/admin-header/admin-header'
import AdminTable from '@/components/ui/admin-table/admin-table/admin-table'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()

	return (
		<Meta title="Movie">
			<AdminNavigation />
			<Heading title="Movie" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Title', 'Genre', 'Raiting']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default MovieList
