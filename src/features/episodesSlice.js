import { createSlice } from '@reduxjs/toolkit'

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episode: {},
    episodes: [],
    info: {},
    page: 1,
    status: 'idle'
  },
  reducers: {
    selectEpisode: (state, action) => {
      state.episode = action.payload
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
    setEpisodes: (state, action) => {
      const results = action.payload.results
      const currentData = state.episodes

      state.episodes = [...currentData, ...results]
      state.info = action.payload.info
      state.status = 'succeeded'
    },
    resetState: (state) => {
      state.episodes = []
      state.episode = {}
      state.info = {}
      state.page = 1
      state.status = 'idle'
    }
  }
})

export const {
  selectEpisode, requestPending, setNewPage,
  setError, setEpisodes, resetState
} = episodesSlice.actions

export default episodesSlice.reducer
