import { useSelector, useDispatch } from "react-redux";
import { takeTurn, reset } from "../features/board/boardSlice";
import { setGameState } from "../features/gameState/gameStateSlice";
import { gameStates, WINNING_PATTERNS, players } from "../app/constants";
import { useCallback, useEffect } from "react";

/**
 * A util hook to access the redux store's state, and event handlers.
 *
 *
 *
 * @returns current state of store + event handlers
 *
 * @example
 *
 * import useGame from './useGame'
 *
 * const GameStartButton = () => {
 *   const { handleStartClick } = useGame();
 *   return <button onClick={handleStartClick}>Start Game</button>
 * }
 */
const useGame = () => {
  const player = useSelector((state) => state.board.player);
  const cells = useSelector((state) => state.board.cells);
  const gameState = useSelector((state) => state.gameState.value);

  const dispatch = useDispatch();

  const findWinner = useCallback(
    (player) =>
      WINNING_PATTERNS.some((pattern) =>
        pattern.every((index) => cells[index] === player)
      ),
    [cells]
  );

  useEffect(() => {
    if (findWinner(players.CROSS)) {
      dispatch(setGameState(gameStates.CROSS_WINS));
    } else if (findWinner(players.ZERO)) {
      dispatch(setGameState(gameStates.ZERO_WINS));
    } else if (cells.every((cell) => cell !== null)) {
      dispatch(setGameState(gameStates.DRAW));
    }
  }, [cells, findWinner, dispatch]);

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
