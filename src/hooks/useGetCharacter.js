import { useDispatch } from 'react-redux'

import {
  requestPending, setCharacters,
  setError, setNewPage
} from '../features/charactersSlice'
import { searchCharacterByNameAxios } from '../services/apis/characters'

const useGetCharacter = () => {
  const dispatch = useDispatch()

  const searchCharactersByName = async (name, page = 1) => {
    try {
      dispatch(requestPending())
      const response = await searchCharacterByNameAxios(name, page)
      dispatch(setCharacters(response))
      dispatch(setNewPage(page))
    } catch (err) {
      dispatch(setError())
      return false
    }
  }

  return {
    searchCharactersByName
  }
}

export default useGetCharacter
