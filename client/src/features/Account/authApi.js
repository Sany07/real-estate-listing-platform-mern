
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
    async onQueryStarted(arg, {dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log('result',result);
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              email: result.data.email,
            })
          );
        } catch (err) {
          // do nothing
          console.log('err', err);
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