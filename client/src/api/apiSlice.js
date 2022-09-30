import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://drealestate.herokuapp.com/api/listings/listings' }),
    // tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})