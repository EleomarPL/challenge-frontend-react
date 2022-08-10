import { useDispatch } from 'react-redux'

import {
  requestPending, setEpisodes,
  setError, setNewPage
} from '../features/episodesSlice'
import { searchEpisodeByNameAxios } from '../services/apis/episodes'

const useGetEpisode = () => {
  const dispatch = useDispatch()

  const searchEpisodesByName = async (name, page = 1) => {
    try {
      dispatch(requestPending())
      const response = await searchEpisodeByNameAxios(name, page)
      dispatch(setEpisodes(response))
      dispatch(setNewPage(page))
    } catch (err) {
      dispatch(setError())
      return false
    }
  }

  return {
    searchEpisodesByName
  }
}

export default useGetEpisode
