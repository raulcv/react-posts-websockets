import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAddPostMutation } from '../../services/golangAPI'

function newPost() {
  const [content, setContent] = useState('')
  const [isNewPost, setIsNewPost] = useState(false)
  const [addPost, { isLoading, isError }] = useAddPostMutation()

  const onHandleSubmmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    addPost({ content })
    setContent('')
    setIsNewPost(false)
  }
  return (
    <div>
      {
        isNewPost ?
          isLoading ?
            <div>Adding a new Post</div>
            : (
              <div>
                <form onSubmit={onHandleSubmmit}>
                  <textarea
                    name="content"
                    id="contentId"
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button>Save</button>
                </form>
                <button onClick={() => setIsNewPost(!isNewPost)}>Cancel</button>
              </div>
            )
          :
          <button onClick={() => setIsNewPost(!isNewPost)}>Add new Post</button>
      }
    </div>
  )
}

export default newPost