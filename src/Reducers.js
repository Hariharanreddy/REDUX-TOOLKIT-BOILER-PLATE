import { createReducer} from "@reduxjs/toolkit"

//initial state is always an object
const initialState = {
    c:0
}

//below are 3 reducers
export const customReducer = createReducer(initialState, {

    increment: (state, action) => {
        state.c += 1;
    },
    incrementByValue: (state, action) => {
        state.c += action.payload;
    },
    decrement: (state, action) => {
        state.c -= 1;
    }

})