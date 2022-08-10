import { createSlice } from '@reduxjs/toolkit'

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    location: {},
    info: {},
    page: 1,
    status: 'idle'
  },
  reducers: {
    selectLocation: (state, action) => {
      state.location = action.payload
    },
    requestPending: (state) => {
      state.status = 'loading'
    },
    setNewPage: (state, action) => {
      state.page = action.payload
    },
    setError: (state, action) => {
      console.log('error')
      state.status = 'error'
    },
    setLocations: (state, action) => {
      const results = action.payload.results
      const currentData = state.locations

      state.locations = [...currentData, ...results]
      state.info = action.payload.info
      state.status = 'succeeded'
    },
    resetState: (state) => {
      state.locations = []
      state.location = {}
      state.info = {}
      state.page = 1
      state.status = 'idle'
    }
  }
})

export const {
  selectLocation, requestPending, setNewPage,
  setError, setLocations, resetState
} = locationsSlice.actions

export default locationsSlice.reducer
