// Responsible for handling all updates to the posts data

import { createSlice } from '@reduxjs/toolkit';

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
        postAdded(state, action) {
            //The action object will have our new post entry as the action.payload 
            //field, and we'll put that new post object into the state array
            state.push(action.payload)
        }
    }
})

//Export the action creator
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer