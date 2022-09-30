
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
  getListingById: builder.query({
    query: (id) => {
     console.log("ID:", id)
     return {
      url: `posts/${id}`,
      method: 'GET'
     }
    }
   }),
})
})

export const { useGetAllListingsQuery, useGetListingByIdQuery} = listingsApi
