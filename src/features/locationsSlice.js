import { createSlice } from '@reduxjs/toolkit'

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    location: {},
    status: 'idle'
  },
  reducers: {
    getInitial: state => {
      state.locations = []
    }
  }
})

export const { getInitial } = locationsSlice.actions

export default locationsSlice.reducer
