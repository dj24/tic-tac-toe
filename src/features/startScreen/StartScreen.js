import { motion } from "framer-motion";

import useGame from "../../hooks/useGame";
import Button from "./Button";

const transition = {
  type: "spring",
  mass: 10,
  stiffness: 2000,
  damping: 200,
  restDelta: 0.005,
};

const StartScreen = () => {
  const { handleStartClick } = useGame();

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mt-12 sm:mr-8 max-w-lg p-6 flex flex-col items-start"
    >
      <motion.h1
        layoutId="title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-black flex mb-6 "
      >
        Tic Tac Toe
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
        transition={{ ...transition, delay: 0.4 }}
        className="text-xl sm:text-2xl text-gray-400 mb-6"
      >
        A game for 2 players: Match 3 cells in a row before the other player to
        win!
      </motion.p>
      <Button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
        transition={{ ...transition, delay: 0.6 }}
        onClick={handleStartClick}
      >
        Start Game
      </Button>
    </motion.div>
  );
};

export default StartScreen;
