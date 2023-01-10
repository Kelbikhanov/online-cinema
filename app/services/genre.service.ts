import { axiosClassic } from 'api/interseptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	async getAll(searchTerms?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerms
				? {
						searchTerms,
				  }
				: {},
		})
	},
}
