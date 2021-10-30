import { motion } from "framer-motion";

import { players } from "../../app/constants";
import useGame from "../../hooks/useGame";

import Cross from "./Cross";
import Zero from "./Zero";

const Board = () => {
  const { cells, player, handleCellClick } = useGame();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="board"
    >
      {cells?.map((cell, i) => {
        let className = "hover-container";
        if (player === players.ZERO && cell === null) {
          className += " hover:bg-blue-100";
        }
        if (player === players.CROSS && cell === null) {
          className += " hover:bg-red-100";
        }
        return (
          <motion.div key={i} className="cell" onClick={handleCellClick(i)}>
            <motion.div className={className}>
              {cell === players.ZERO && <Zero />}
              {cell === players.CROSS && <Cross />}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Board;
