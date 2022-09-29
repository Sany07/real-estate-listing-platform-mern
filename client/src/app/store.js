import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { listingsApi } from '../features/Listings/listingSlice'



export const store = configureStore({
  reducer: {
    [listingsApi.reducerPath]: listingsApi.reducer
  },  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(listingsApi.middleware),
})

setupListeners(store.dispatch)