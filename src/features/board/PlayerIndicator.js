import useGame from "../../hooks/useGame";

const PlayerIndicator = () => {
  const { player } = useGame();
  return <h1>{player}</h1>;
};

export default PlayerIndicator;
