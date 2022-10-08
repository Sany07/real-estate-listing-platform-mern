import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../features/Account/authApi'
import authSlice from '../features/Account/authSlice'
import { apiSlice } from '../features/api/apiSlice'
import { listingsApi } from '../features/Listings/listingSlice'

// export const store = configureStore({
//   reducer: {
//     [listingsApi.reducerPath]: listingsApi.reducer,
//     [authApi.reducerPath]: authApi.reducer,
//   },  
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(listingsApi.middleware),
// })

// setupListeners(store.dispatch)

// import authReducer from '../features/auth/authSlice';
// import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [listingsApi.reducerPath]: listingsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
