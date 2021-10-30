import { useSelector, useDispatch } from "react-redux";

import { takeTurn, reset } from "../features/board/boardSlice";
import { setGameState } from "../features/gameState/gameStateSlice";
import { gameStates } from "../app/constants";

/**
 * A util hook to access the app's state and event handlers.
 *
 * @returns object containing state values and event handlers
 *
 * @example
 * ```jsx
 * import useGame from './useGame'
 *
 * const GameStartButton = () => {
 *   const { handleStartClick } = useGame();
 *   return <button onClick={handleStartClick}>Start Game</button>
 * }
 * ```
 */
const useGame = () => {
  const player = useSelector((state) => state.board.player);
  const cells = useSelector((state) => state.board.cells);
  const gameState = useSelector((state) => state.gameState.value);
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(reset());
    dispatch(setGameState(gameStates.IN_PROGRESS));
  };

  const handleCellClick = (index) => () => {
    // if the selected cell is filled, do nothing
    if (cells[index] !== null) {
      return;
    }
    dispatch(takeTurn(index));
    if (gameState === gameStates.START) {
      dispatch(setGameState(gameStates.IN_PROGRESS));
    }
  };

  return { player, cells, gameState, handleCellClick, handleStartClick };
};

export default useGame;
