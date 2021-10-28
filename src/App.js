import React from "react";
import Board from "./features/board/Board";
import PlayerIndicator from "./features/board/PlayerIndicator";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useGame from "./hooks/useGame";
import { gameStates } from "./app/constants";

const Button = (props) => {
  return (
    <button
      className="px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white"
      {...props}
    />
  );
};

const headingVariants = {
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const spanVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const StartScreen = () => {
  const { handleStartClick } = useGame();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        variants={headingVariants}
        initial={"hidden"}
        animate={"show"}
        className="text-7xl font-black flex"
      >
        <motion.span className="flex mr-4" variants={spanVariants}>
          Tic
        </motion.span>
        <motion.span className="flex mr-4" variants={spanVariants}>
          Tac
        </motion.span>
        <motion.span className="flex mr-4" variants={spanVariants}>
          Toe
        </motion.span>
      </motion.h1>
      <Button onClick={handleStartClick}>Start Game</Button>
    </motion.div>
  );
};

const App = () => {
  const { gameState } = useGame();
  return (
    <main>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 10,
          stiffness: 800,
          damping: 200,
          restDelta: 0.001,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {gameState === gameStates.START && <StartScreen key={1} />}
          {gameState === gameStates.IN_PROGRESS && <Board key={2} />}
        </AnimatePresence>
      </MotionConfig>
      {/* <PlayerIndicator /> */}
    </main>
  );
};

export default App;
