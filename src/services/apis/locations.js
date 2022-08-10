import axios from 'axios'

import { BASE_API } from '../BASE_API'
const LOCATION_API = `${BASE_API}location`

export const searchLocationByNameAxios = async (name, page = 0) => {
  const response = await axios.get(`${LOCATION_API}?name=${name}&page=${page}`)
  return response.data
}
