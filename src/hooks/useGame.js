import { useSelector, useDispatch } from "react-redux";
import { takeTurn } from "../features/board/boardSlice";

const useGame = () => {
  const player = useSelector((state) => state.board.player);
  const cells = useSelector((state) => state.board.cells);

  const dispatch = useDispatch();

  const handleCellClick = (index) => () => {
    // if the selected cell is filled, do nothing
    if (cells[index] !== null) {
      return;
    }
    dispatch(takeTurn(index));
  };

  return { player, cells, handleCellClick };
};

export default useGame;
