import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    character: {},
    status: 'idle'
  },
  reducers: {
    getInitial: state => {
      state.characters = []
    }
  }
})

export const { getInitial } = charactersSlice.actions

export default charactersSlice.reducer
