import { axiosClassic } from 'api/interseptors'

import { IGenre, IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	async getAll(searchTerms?: string) {
		return axiosClassic.get<IGenre[]>(getMoviesUrl(''), {
			params: searchTerms
				? {
						searchTerms,
				  }
				: {},
		})
	},

  async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
}
