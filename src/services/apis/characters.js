import axios from 'axios'

import { BASE_API } from '../BASE_API'
const CHARACTER_API = `${BASE_API}character`

export const searchCharacterByNameAxios = async (name, page = 0) => {
  const response = await axios.get(`${CHARACTER_API}?name=${name}&page=${page}`)
  return response.data
}
