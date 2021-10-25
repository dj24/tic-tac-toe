import { createSlice } from "@reduxjs/toolkit";
import { players } from "../../app/constants";

const initialState = {
  value: players.CROSS,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    togglePlayer: (state) => {
      state.value =
        state.value === players.CROSS ? players.ZERO : players.CROSS;
    },
  },
});

export const { togglePlayer } = playerSlice.actions;

export default playerSlice.reducer;
