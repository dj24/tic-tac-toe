import { useSelector } from "react-redux";

const useGame = () => {
  const player = useSelector((state) => state.player.value);
  const cells = useSelector((state) => state.board.value);
  return { player, cells };
};

export default useGame;
