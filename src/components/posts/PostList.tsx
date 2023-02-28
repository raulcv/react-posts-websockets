import React, { ChangeEvent } from 'react'

interface Post {
  id: string
  content: string

}
interface InitialProps {
  posts: Post[],
  setPage: Function,
  currentPage: number
}

function PostList({ posts, setPage, currentPage }: InitialProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const val = Number(e.target.value)
    if (val) {
      console.log("cool")
      setPage(val)
    } else {
      console.log("Please enter a positive number")
      e.target.value = ''
    }
  }

  return (
    <div>
      <h1>LIST OF POSTS</h1>
      <div>Current page {currentPage}</div>
      <input type="text" onChange={handleChange} />
      <div>
        {
          posts.map((post) => (
            <div key={post.id}>
              <p>{post.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PostList