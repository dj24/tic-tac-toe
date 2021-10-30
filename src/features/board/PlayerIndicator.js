import { motion } from "framer-motion";

import useGame from "../../hooks/useGame";
import { players } from "../../app/constants";

const PlayerSpan = ({ children, colour, active }) => {
  const className = `
  px-6 py-3 rounded-xl transition-colors font-semibold
  ${active ? `text-${colour}-500 bg-${colour}-100` : "text-gray-400"}`;
  return <span className={className}>{children}</span>;
};

const PlayerIndicator = () => {
  const { player } = useGame();
  return (
    <motion.div
      initial={{ y: 64 }}
      animate={{ y: 0 }}
      exit={{ y: 64 }}
      transition={{ type: "spring", bounce: 0.25 }}
      className="flex fixed bottom-0 w-full max-w-md justify-between p-8 capitalize text-2xl"
    >
      <PlayerSpan colour="red" active={player === players.CROSS}>
        {players.CROSS}
      </PlayerSpan>
      <PlayerSpan colour="blue" active={player === players.ZERO}>
        {players.ZERO}
      </PlayerSpan>
    </motion.div>
  );
};

export default PlayerIndicator;
