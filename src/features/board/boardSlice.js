import { createSlice } from "@reduxjs/toolkit";
import { players } from "../../app/constants";

const BLANK_BOARD = [null, null, null, null, null, null, null, null, null];

const initialState = {
  cells: BLANK_BOARD,
  player: players.CROSS,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    takeTurn: (state, action) => {
      state.cells[action.payload] = state.player;
      state.player =
        state.player === players.ZERO ? players.CROSS : players.ZERO;
    },
  },
});

export const { reset, takeTurn } = boardSlice.actions;

export default boardSlice.reducer;
