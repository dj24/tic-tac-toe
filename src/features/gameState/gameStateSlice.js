import { createSlice } from "@reduxjs/toolkit";
import { gameStates } from "../../app/constants";

export const gameStateSlice = createSlice({
  name: "board",
  initialState: {
    value: gameStates.START,
  },
  reducers: {
    setGameState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGameState } = gameStateSlice.actions;

export default gameStateSlice.reducer;
