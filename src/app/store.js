import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/board/boardSlice";
import gameStateReducer from "../features/gameState/gameStateSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    gameState: gameStateReducer,
  },
});
