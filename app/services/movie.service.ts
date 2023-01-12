import { axiosClassic } from 'api/interseptors'

import { IGenre } from '@/shared/types/movie.types'

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
}
