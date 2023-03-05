import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Post {
  id: string
  content: string
}
type PostsResponse = Post[]

export const golangApi = createApi({
  reducerPath: 'golangApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3020' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ page }) => `/posts?page=${page}`
    }),
    getPost: build.query({
      query: ({ id }) => `/posts/${id}`
    }),
    addPost: build.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  
} = golangApi