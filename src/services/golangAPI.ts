import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const golangApi = createApi({
  reducerPath: 'golangApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3020' }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ page }) => `/posts?page=${page}`
    }),
  }),
})

export const {
  useGetPostsQuery
} = golangApi