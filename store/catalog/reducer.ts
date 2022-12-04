import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'
import { CatalogState } from './state'

const catalogInitialState: CatalogState = {
  items: []
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
  reducers: {},
})

export const { } = catalogSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.catalog

export default catalogSlice.reducer