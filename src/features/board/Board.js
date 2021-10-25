import usePlayerTurn from "../../hooks/usePlayerTurn";

import { players } from "../../app/constants";
import Cross from "./Cross";
import Zero from "./Zero";
import useGame from "../../hooks/useGame";

const Board = () => {
  const { cells } = useGame();
  const { handleCellClick } = usePlayerTurn();

  return (
    <div className="board">
      {cells?.map((cell, i) => (
        <div key={i} className="cell" onClick={handleCellClick(i)}>
          {cell === players.ZERO && <Zero />}
          {cell === players.CROSS && <Cross />}
        </div>
      ))}
    </div>
  );
};

export default Board;
