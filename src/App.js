import React from "react";

import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  MotionConfig,
} from "framer-motion";

import useGame from "./hooks/useGame";
import { gameStates } from "./app/constants";
import Board from "./features/board/Board";
import PlayerIndicator from "./features/board/PlayerIndicator";
import StartScreen from "./features/startScreen/StartScreen";
import Modal from "./features/modal/Modal";

const App = () => {
  const { gameState } = useGame();
  return (
    <motion.main className="fixed w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center">
      <MotionConfig
        transition={{
          type: "spring",
          mass: 10,
          stiffness: 1500,
          damping: 200,
          restDelta: 0.005,
        }}
      >
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            {gameState === gameStates.START ? (
              <StartScreen key={"start-screen"} />
            ) : (
              <>
                <motion.div className="fixed top-0 p-12">
                  <motion.h1 className="font-black text-4xl" layoutId="title">
                    Tic Tac Toe
                  </motion.h1>
                </motion.div>
                <Board key={"board"} />
                <PlayerIndicator key={"player-indicator"} />
              </>
            )}
            {gameState === gameStates.CROSS_WINS && (
              <Modal key={"cross-modal"}>
                🎉 <span className="text-red-500">Cross</span> Wins!
              </Modal>
            )}
            {gameState === gameStates.ZERO_WINS && (
              <Modal key={"zero-modal"}>
                🎉 <span className="text-blue-500">Zero</span> Wins!
              </Modal>
            )}
            {gameState === gameStates.DRAW && (
              <Modal key={"draw-modal"}>🙅‍♂️ Draw!</Modal>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </MotionConfig>
    </motion.main>
  );
};

export default App;
