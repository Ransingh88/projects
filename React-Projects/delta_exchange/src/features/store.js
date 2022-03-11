import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducer/authSlice'
import teamSlice from './reducer/teamSlice'

export const store = configureStore({
  reducer: {
      team:teamSlice,
      auth:authSlice
  },
})