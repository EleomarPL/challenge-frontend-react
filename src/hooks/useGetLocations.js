import { useDispatch } from 'react-redux'

import {
  requestPending, setLocations,
  setError, setNewPage
} from '../features/locationsSlice'
import { searchLocationByNameAxios } from '../services/apis/locations'

const useGetLocation = () => {
  const dispatch = useDispatch()

  const searchLocationByName = async (name, page = 1) => {
    try {
      dispatch(requestPending())
      const response = await searchLocationByNameAxios(name, page)
      dispatch(setLocations(response))
      dispatch(setNewPage(page))
    } catch (err) {
      dispatch(setError())
      return false
    }
  }

  return {
    searchLocationByName
  }
}

export default useGetLocation
