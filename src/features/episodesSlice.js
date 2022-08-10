import { createSlice } from '@reduxjs/toolkit'

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episode: {},
    episodes: [],
    status: 'idle'
  },
  reducers: {
    getInitial: state => {
      state.episodes = []
    }
  }
})

export const { getInitial } = episodesSlice.actions

export default episodesSlice.reducer
