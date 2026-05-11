import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {id: '0', name : 'Kastuve'},
    {id: '1', name : 'Shalon'},
    {id: '2', name : 'Hello'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer