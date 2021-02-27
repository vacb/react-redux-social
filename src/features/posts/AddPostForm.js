import React, { useState } from 'react'
// Import in order to dispatch actions from the component:
import { useDispatch, useSelector } from 'react-redux'
// Used to generate random unique IDs:
// Moved to postSlice.js
//import { nanoid } from '@reduxjs/toolkit'

// Import postAdded action creator:
import { postAdded } from './postsSlice'


export const AddPostForm = () => {
  // Redux store only contains data that's considered global for the app
  // These useState hooks are to keep track of the title and content values
  // that the user is typing in. Only the AddPostForm component needs to know
  // about the latest values for the input fields, so we want to keep that data
  // in the component instead of trying to keep the temporary data in the 
  // Redux store. Once the form is complete, -then- we dispatch a Redux
  // action to update the store with the final values.
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
        </button>
      </form>
    </section>
  )
}