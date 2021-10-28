import { motion } from "framer-motion";

import { players } from "../../app/constants";
import useGame from "../../hooks/useGame";

import Cross from "./Cross";
import Zero from "./Zero";

const Board = () => {
  const { cells, handleCellClick } = useGame();

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      className="board"
    >
      {cells?.map((cell, i) => (
        <div key={i} className="cell" onClick={handleCellClick(i)}>
          {cell === players.ZERO && <Zero />}
          {cell === players.CROSS && <Cross />}
        </div>
      ))}
    </motion.div>
  );
};

export default Board;
