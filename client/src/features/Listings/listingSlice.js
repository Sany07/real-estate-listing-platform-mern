
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../api/apiSlice';

export const listingsApi = apiSlice.injectEndpoints({
reducerPath: 'listingsApi',
 endpoints: (builder) => ({
  getAllListings: builder.query({
   query: () => ({
    url: 'listings',
    method: 'GET'
   })
  }),
  getListingById: builder.query({
    query: (id) => {
     console.log("ID:", id)
     return {
      url: `listings/detail/${id}`,
      method: 'GET'
     }
    }
   }),
   searchListing: builder.query({
     query: ({garage,bedrooms}) => {
      console.log("ID:",bedrooms,garage)
      return {
       url: `listings/search?bedrooms=${bedrooms}&garage=${garage}`,
       method: 'GET'
      }
     }
    })
})
})

export const { useGetAllListingsQuery, useGetListingByIdQuery, useSearchListingQuery} = listingsApi