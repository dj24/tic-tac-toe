import { createSlice } from "@reduxjs/toolkit";
import { players } from "../../app/constants";

const BLANK_BOARD = [null, null, null, null, null, null, null, null, null];

const initialState = {
  value: BLANK_BOARD,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    reset: (state) => {
      state.value = BLANK_BOARD;
    },
    crossAtIndex: (state, action) => {
      state.value[action.payload] = players.CROSS;
    },
    zeroAtIndex: (state, action) => {
      state.value[action.payload] = players.ZERO;
    },
  },
});

export const { reset, crossAtIndex, zeroAtIndex } = boardSlice.actions;

export default boardSlice.reducer;
