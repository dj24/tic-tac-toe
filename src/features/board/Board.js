import { players } from "../../app/constants";
import useGame from "../../hooks/useGame";

import Cross from "./Cross";
import Zero from "./Zero";

const Board = () => {
  const { cells, handleCellClick } = useGame();

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
