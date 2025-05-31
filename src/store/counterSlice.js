import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {counterVal : 0},
  reducers: {
    increment: (state) => {
      state.counterVal++;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice;
