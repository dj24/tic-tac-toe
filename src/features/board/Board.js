import { motion } from "framer-motion";

import { players } from "../../app/constants";
import useGame from "../../hooks/useGame";

import Cross from "./Cross";
import Zero from "./Zero";

/**
 * 3x3 grid component to handle the main play area of the game.
 *
 * @example
 * ```jsx
 * const Page = () => (
 *    <Board/>
 * );
 * ```
 *
 */
const Board = () => {
  const { cells, player, handleCellClick } = useGame();

  return (
    <motion.div
      aria-label="tic-tac-toe-grid"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
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
          <motion.div key={i} className="cell">
            <motion.button
              aria-label={`grid-cell-${i}`}
              className={className}
              onClick={handleCellClick(i)}
            >
              {cell === players.ZERO && <Zero />}
              {cell === players.CROSS && <Cross />}
            </motion.button>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Board;
