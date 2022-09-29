
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const listingsApi = createApi({
reducerPath: 'listingsApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
 }),

 endpoints: (builder) => ({
  getAllListings: builder.query({
   query: () => ({
    url: 'posts',
    method: 'GET'
   })
  }),
})
})

export const { useGetAllListingsQuery} = listingsApi
