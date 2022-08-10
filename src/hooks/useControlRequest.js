import { useSelector } from 'react-redux'

import { calculateLimit } from '../utils/calculateLimit'
import useGetCharacter from './useGetCharacter'

const useControlRequest = () => {
  const currentPage = useSelector(state => state.characters.page)
  const { searchCharactersByName } = useGetCharacter()

  const willNewRequestCharacter = (newPage, rowsPerPage, searcher) => {
    const limit = calculateLimit(newPage, rowsPerPage, currentPage)
    if (limit) return searchCharactersByName(searcher, currentPage + 1)
    return false
  }

  return {
    willNewRequestCharacter
  }
}

export default useControlRequest
