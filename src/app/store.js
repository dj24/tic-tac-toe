import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/board/boardSlice";
import playerReducer from "../features/player/playerSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    player: playerReducer,
  },
});
