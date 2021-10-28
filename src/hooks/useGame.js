import { useSelector, useDispatch } from "react-redux";
import { takeTurn } from "../features/board/boardSlice";
import { setGameState } from "../features/gameState/gameStateSlice";
import { gameStates } from "../app/constants";

const useGame = () => {
  const player = useSelector((state) => state.board.player);
  const cells = useSelector((state) => state.board.cells);
  const gameState = useSelector((state) => state.gameState.value);

  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(setGameState(gameStates.IN_PROGRESS));
  };

  const handleCellClick = (index) => () => {
    // if the selected cell is filled, do nothing
    if (cells[index] !== null) {
      return;
    }
    dispatch(takeTurn(index));
  };

  return { player, cells, gameState, handleCellClick, handleStartClick };
};

export default useGame;
