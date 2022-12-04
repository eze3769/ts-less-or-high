import { configureStore } from '@reduxjs/toolkit'
import { catalogSlice } from './catalog/reducer'

export const store = configureStore({
  reducer: {catalog: catalogSlice.reducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch