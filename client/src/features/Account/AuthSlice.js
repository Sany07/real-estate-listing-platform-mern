
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
reducerPath: 'authApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'https://drealestate.herokuapp.com/api/',
 }),


  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/login",
          method: "post",
          body:data,
        };
      },
    }),
    signupUser: builder.mutation({
        query: (data) => {
          console.log(data);
          return {
            url: "/auth/register",
            method: "post",
            body:data,
          };
        },
      }),
    })
})

export const {   useSigninUserMutation, useSignupUserMutation} = authApi