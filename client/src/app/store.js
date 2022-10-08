import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from '../features/Account/authApi'
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
    // auth: authReducer,
    [listingsApi.reducerPath]: listingsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
