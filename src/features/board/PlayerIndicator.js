import { motion } from "framer-motion";

import useGame from "../../hooks/useGame";
import { players } from "../../app/constants";

const PlayerSpan = ({ children, player, active }) => {
  const className = `
  px-6 py-3 rounded-xl transition-colors font-semibold
  ${active && player === players.CROSS ? "text-red-500 bg-red-100" : ""}
  ${active && player === players.ZERO ? "text-blue-500 bg-blue-100" : ""}
  ${!active ? "text-gray-400" : ""}`;
  return <span className={className}>{children}</span>;
};

/**
 * Component to indicate the which player's turn it currently is.
 *
 * @example
 * ```jsx
 *
 * const Page = () => (
 *    <>
 *      <Grid/>
 *      <PlayerIndicator/>
 *    </>
 * );
 * ```
 *
 */
const PlayerIndicator = () => {
  const { player } = useGame();
  return (
    <motion.div
      initial={{ y: 72 }}
      animate={{ y: 0 }}
      exit={{ y: 72, transition: { duration: 0.1 } }}
      transition={{ type: "spring", bounce: 0.25 }}
      className="flex fixed bottom-0 w-full max-w-md justify-between p-8 capitalize text-2xl"
    >
      <PlayerSpan player={players.CROSS} active={player === players.CROSS}>
        {players.CROSS}
      </PlayerSpan>
      <PlayerSpan player={players.ZERO} active={player === players.ZERO}>
        {players.ZERO}
      </PlayerSpan>
    </motion.div>
  );
};

export default PlayerIndicator;
