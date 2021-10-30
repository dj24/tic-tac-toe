import { createSlice } from "@reduxjs/toolkit";
import { players } from "../../app/constants";

const BLANK_BOARD = [null, null, null, null, null, null, null, null, null];

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    cells: BLANK_BOARD,
    player: players.CROSS,
  },
  reducers: {
    reset: (state) => {
      state.cells = BLANK_BOARD;
      state.player = players.CROSS;
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
