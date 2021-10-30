import { motion } from "framer-motion";

import useGame from "../../hooks/useGame";
import Button from "../startScreen/Button";
import CloseButton from "./CloseButton";

/**
 * The top level component used to render the entire app from the root file.
 * This component requires a valid Redux provider as it's parent.
 *
 * @example
 * ```jsx
 * const Page = () => (
 *    <Modal>Modal Content Here</Modal>
 * );
 * ```
 *
 */
const Modal = ({ children }) => {
  const { handleStartClick } = useGame();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-full fixed top-0 bg-black bg-opacity-25 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{
          scale: {
            type: "spring",
            mass: 10,
            stiffness: 1500,
            damping: 135,
            restDelta: 0.0005,
          },
        }}
        className="rounded-xl w-full max-w-sm bg-white flex-col m-4"
      >
        <header className="border-b px-6 py-4 font-semibold text-xl flex justify-between items-center">
          <span>Game Result</span>
          <CloseButton onClick={handleStartClick} />
        </header>
        <main className="p-6 flex flex-col">
          <div className="text-xl">{children}</div>
        </main>
        <footer className="border-t p-6 flex flex-col">
          <Button onClick={handleStartClick}>Play Again</Button>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
