import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'username_1' },
  { id: '1', name: 'username_2' },
  { id: '2', name: 'username_3' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer