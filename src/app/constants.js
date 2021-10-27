const players = {
  CROSS: "cross",
  ZERO: "zero",
};

const gameStates = {
  START: "start",
  IN_PROGRESS: "in progress",
  CROSS_WINS: "cross wins",
  ZERO_WINS: "zero wins",
  DRAW: "draw",
};

const horizontalTop = [0, 1, 2];
const horizontalMiddle = [3, 4, 5];
const horizontalBottom = [6, 7, 8];
const verticalLeft = [0, 3, 6];
const verticalMiddle = [1, 4, 7];
const verticalRight = [2, 5, 8];
const diagonalPositive = [6, 4, 2];
const diagonalNegative = [0, 4, 8];

const WINNING_PATTERNS = [
  horizontalTop,
  horizontalMiddle,
  horizontalBottom,
  verticalLeft,
  verticalMiddle,
  verticalRight,
  diagonalPositive,
  diagonalNegative,
];

export { players, gameStates, WINNING_PATTERNS };
