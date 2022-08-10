import { useSelector } from 'react-redux'

import { calculateLimit } from '../utils/calculateLimit'
import useGetCharacter from './useGetCharacter'
import useGetEpisode from './useGetEpisode'
import useGetLocation from './useGetLocations'

const useControlRequest = () => {
  const currentPageCharacter = useSelector(state => state.characters.page)
  const currentPageEpisode = useSelector(state => state.episodes.page)
  const currentPageLocation = useSelector(state => state.locations.page)

  const { searchCharactersByName } = useGetCharacter()
  const { searchEpisodesByName } = useGetEpisode()
  const { searchLocationByName } = useGetLocation()

  const willNewRequestCharacter = (newPage, rowsPerPage, searcher) => {
    const limit = calculateLimit(newPage, rowsPerPage, currentPageCharacter)
    if (limit) return searchCharactersByName(searcher, currentPageCharacter + 1)
    return false
  }
  const willNewRequestEpisode = (newPage, rowsPerPage, searcher) => {
    const limit = calculateLimit(newPage, rowsPerPage, currentPageEpisode)
    if (limit) return searchEpisodesByName(searcher, currentPageEpisode + 1)
    return false
  }
  const willNewRequestLocation = (newPage, rowsPerPage, searcher) => {
    const limit = calculateLimit(newPage, rowsPerPage, currentPageLocation)
    if (limit) return searchLocationByName(searcher, currentPageLocation + 1)
    return false
  }

  return {
    willNewRequestCharacter,
    willNewRequestEpisode,
    willNewRequestLocation
  }
}

export default useControlRequest
