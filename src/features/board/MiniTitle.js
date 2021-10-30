import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { gameStates } from "../../app/constants";
import { setGameState } from "../gameState/gameStateSlice";

/**
 * Smaller title component to be used during gameplay.
 *
 * @example
 * ```jsx
 *   <MiniTitle key="title" />
 *   <Board key="board" />
 *   <PlayerIndicator key="player-indicator" />
 * ```
 *
 */
const MiniTitle = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="fixed top-0 py-6 px-8 my-6 transition-colors hover:bg-gray-100 rounded-xl"
      onClick={() => dispatch(setGameState(gameStates.START))}
    >
      <motion.h1 className="font-black text-4xl" layoutId="title">
        Tic Tac Toe
      </motion.h1>
    </button>
  );
};

export default MiniTitle;
