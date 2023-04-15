import { axiosClassic } from 'api/interseptors'
import axios from "../api/interseptors";

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
	async getAll(searchTerms?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerms
				? {
						searchTerms,
				  }
				: {},
		})
	},

	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	}
}
