import React, { useState } from 'react'
import { useGetPostsQuery } from '../../services/golangAPI'
import PostList from './PostList'

function movies() {
  const [page, setPage] = useState(1)
  const { data, isError, isFetching, isLoading, error } = useGetPostsQuery({ page })

  console.log(data)
  if (isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{"error"}</div>
  }
  return (
    <div>
      <PostList posts={data} setPage={setPage} currentPage={page}/>
    </div>
  )
}

export default movies