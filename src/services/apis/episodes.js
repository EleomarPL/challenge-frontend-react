import axios from 'axios'

import { BASE_API } from '../BASE_API'
const EPISODE_API = `${BASE_API}episode`

export const searchEpisodeByNameAxios = async (name, page = 0) => {
  const response = await axios.get(`${EPISODE_API}?name=${name}&page=${page}`)
  return response.data
}
