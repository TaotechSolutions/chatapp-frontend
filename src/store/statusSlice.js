
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "",
    expiresAt: null
}
const statusSlice = createSlice({
name: "status",
initialState,

reducers : {

    newStatus: (state, action)=>{
        state.status = action.payload.status;
        state.expiresAt = action.payload.expiresAt
    }
}
})

export const {newStatus} = statusSlice.actions


export default statusSlice.reducer