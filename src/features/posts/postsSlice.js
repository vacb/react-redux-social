// Responsible for handling all updates to the posts data

import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'Random text' }
]

const postsSlice = createSlice({
    //Safe to use mutating functions like Array.push in createSlice because
    //it uses Immer to conver to immutable updates. Don't do this outside
    //createSlice.
    name: 'posts',
    initialState,
    reducers: {
        //When we write the postAdded reducer function, createSlice will 
        //automatically generate an "action creator" function with the same 
        //name. We can export that action creator and use it in our UI components 
        //to dispatch the action when the user clicks "Save Post"
        postAdded: {
            reducer(state, action) {
              state.push(action.payload)
            },
            prepare(title, content) {
              return {
                payload: {
                  id: nanoid(),
                  title,
                  content
                }
              }
            }
          },
        
        postUpdated(state, action) {
                const { id, title, content } = action.payload
                const existingPost = state.find(post => post.id === id)
                if (existingPost) {
                  existingPost.title = title
                  existingPost.content = content
                }
        }
    }
})

//Export the action creator
export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer