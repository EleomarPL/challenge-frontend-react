import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    character: {},
    info: {},
    page: 1,
    status: 'idle'
  },
  reducers: {
    selectCharacter: (state, action) => {
      state.character = action.payload
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
    setCharacters: (state, action) => {
      const results = action.payload.results
      const currentData = state.characters

      state.characters = [...currentData, ...results]
      state.info = action.payload.info
      state.status = 'succeeded'
    },
    resetState: (state) => {
      state.characters = []
      state.character = {}
      state.info = {}
      state.page = 1
      state.status = 'idle'
    }
  }
})

export const {
  requestPending, setCharacters, setError,
  setNewPage, resetState, selectCharacter
} = charactersSlice.actions

export default charactersSlice.reducer
