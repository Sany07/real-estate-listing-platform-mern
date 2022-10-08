
import { apiSlice } from '../api/apiSlice';

import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "post",
          body:data,
        };
      },
    }),
    async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
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