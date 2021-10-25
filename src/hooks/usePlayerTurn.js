import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { players } from "../app/constants";
import { togglePlayer } from "../features/player/playerSlice";
import { crossAtIndex, zeroAtIndex } from "../features/board/boardSlice";
import useGame from "./useGame";

const HORIZONTAL_TOP = [0, 1, 2];
const HORIZONTAL_MIDDLE = [3, 4, 5];
const HORIZONTAL_BOTTOM = [6, 7, 8];

const VERTICAL_LEFT = [0, 3, 6];
const VERTICAL_MIDDLE = [1, 4, 7];
const VERTICAL_RIGHT = [2, 5, 8];

const DIAGONAL_POSITVITE = [6, 4, 2];
const DIAGONAL_NEGATIVE = [0, 4, 8];

const WINNING_PATTERNS = [
  HORIZONTAL_TOP,
  HORIZONTAL_MIDDLE,
  HORIZONTAL_BOTTOM,
  VERTICAL_LEFT,
  VERTICAL_MIDDLE,
  VERTICAL_RIGHT,
  DIAGONAL_POSITVITE,
  DIAGONAL_NEGATIVE,
];

const usePlayerTurn = () => {
  const { player, cells } = useGame();
  const dispatch = useDispatch();

  const handleCellClick = (index) => () => {
    // if the selected cell is filled, do nothing
    if (cells[index] !== null) {
      return;
    }
    switch (player) {
      case players.CROSS:
        dispatch(crossAtIndex(index));
        break;
      case players.ZERO:
        dispatch(zeroAtIndex(index));
        break;
      default:
        break;
    }
  };

  // Whenever a cell is filled, toggle the player
  useEffect(() => {
    dispatch(togglePlayer());
  }, [cells, dispatch]);

  return { handleCellClick };
};

export default usePlayerTurn;
