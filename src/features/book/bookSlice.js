import { createSlice } from '@reduxjs/toolkit'


const initialState = { arr: []}



export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        add: (state, action) => {
            action.payload.id = state.arr.length;
            state.arr.push(action.payload);
        },
        
       saveInClient:(state,action)=>{
        state.arr=action.payload;
       }
       
    },
})

export const {add,saveInClient  } = bookSlice.actions


export default bookSlice.reducer;

