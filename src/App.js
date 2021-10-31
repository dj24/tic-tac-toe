import React, { useEffect, useCallback } from "react";

import {
  AnimatePresence,
  AnimateSharedLayout,
  MotionConfig,
} from "framer-motion";

import useGame from "./hooks/useGame";
import { gameStates, players, WINNING_PATTERNS } from "./app/constants";
import Board from "./features/board/Board";
import PlayerIndicator from "./features/board/PlayerIndicator";
import StartScreen from "./features/startScreen/StartScreen";
import Modal from "./features/modal/Modal";
import MiniTitle from "./features/board/MiniTitle";
import { useDispatch } from "react-redux";
import { setGameState } from "./features/gameState/gameStateSlice";

const DEFAULT_TRANSITION = {
  type: "spring",
  mass: 10,
  stiffness: 1500,
  damping: 200,
  restDelta: 0.005,
};

/**
 * The top level component used to render the entire app from the root file.
 * This component requires a valid Redux provider as it's parent.
 *
 * @example
 * ```jsx
 * import ReactDOM from "react-dom";
 * import App from "./App";
 * import { store } from "./app/store";
 * import { Provider } from "react-redux";
 *
 * ReactDOM.render(
 *    <Provider store={store}>
 *      <App />
 *     </Provider>,
 *   document.getElementById("root")
 * );
 * ```
 *
 */
const App = () => {
  const { gameState, cells } = useGame();
  const dispatch = useDispatch();

  const findWinner = useCallback(
    (player) =>
      WINNING_PATTERNS.some((pattern) =>
        pattern.every((index) => cells[index] === player)
      ),
    [cells]
  );

  useEffect(() => {
    if (findWinner(players.CROSS)) {
      dispatch(setGameState(gameStates.CROSS_WINS));
    } else if (findWinner(players.ZERO)) {
      dispatch(setGameState(gameStates.ZERO_WINS));
    } else if (cells.every((cell) => cell !== null)) {
      dispatch(setGameState(gameStates.DRAW));
    }
  }, [cells, findWinner, dispatch]);

  return (
    <main className="fixed w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center">
      <MotionConfig transition={DEFAULT_TRANSITION}>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            {gameState === gameStates.START ? (
              <StartScreen key="start-screen" />
            ) : (
              <>
                <MiniTitle key="title" />
                <Board key="board" />
                <PlayerIndicator key="player-indicator" />
              </>
            )}
            {gameState === gameStates.CROSS_WINS && (
              <Modal key="cross-modal">
                🎉 <span className="text-red-500">Cross</span> Wins!
              </Modal>
            )}
            {gameState === gameStates.ZERO_WINS && (
              <Modal key="zero-modal">
                🎉 <span className="text-blue-500">Zero</span> Wins!
              </Modal>
            )}
            {gameState === gameStates.DRAW && (
              <Modal key="draw-modal">🙅‍♂️ Draw!</Modal>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </MotionConfig>
    </main>
  );
};

export default App;
