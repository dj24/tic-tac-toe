import { motion } from "framer-motion";

import useGame from "../../hooks/useGame";
import Button from "./Button";

const TRANSITION_BASE = {
  type: "spring",
  mass: 10,
  stiffness: 2000,
  damping: 200,
  restDelta: 0.005,
};

/**
 * The entry point of the App; the first screen presented
 *
 * @example
 * ```jsx
 *
 * const Page = () => (
 *    <StartScreen />
 * );
 * ```
 *
 */
const StartScreen = () => {
  const { handleStartClick } = useGame();

  return (
    <motion.div className="mt-12 sm:mr-8 max-w-lg p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
      <motion.h1
        layoutId="title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...TRANSITION_BASE, delay: 0.4 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-black flex mb-6 "
      >
        Tic Tac Toe
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
        transition={{ ...TRANSITION_BASE, delay: 0.6 }}
        className="text-xl sm:text-2xl text-gray-400 mb-6"
      >
        A game for 2 players: Match 3 cells in a row before the other player to
        win!
      </motion.p>
      <Button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
        transition={{ ...TRANSITION_BASE, delay: 0.8 }}
        onClick={handleStartClick}
      >
        Start Game
      </Button>
    </motion.div>
  );
};

export default StartScreen;
