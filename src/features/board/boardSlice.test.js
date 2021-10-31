import reducer, { takeTurn, reset } from "./boardSlice";
import { players } from "../../app/constants";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    cells: [null, null, null, null, null, null, null, null, null],
    player: players.CROSS,
  });
});

test("take turn updates cells and toggles the player", () => {
  const previousState = {
    cells: [null, null, null, null, null, null, null, null, null],
    player: players.CROSS,
  };
  expect(reducer(previousState, takeTurn(0))).toEqual({
    cells: [players.CROSS, null, null, null, null, null, null, null, null],
    player: players.ZERO,
  });
});

test("reset changes all cell values to null, and player to cross", () => {
  const previousState = {
    cells: [
      players.CROSS,
      players.CROSS,
      null,
      players.ZERO,
      null,
      players.CROSS,
      players.ZERO,
      null,
      players.ZERO,
    ],
    player: players.CROSS,
  };
  expect(reducer(previousState, reset())).toEqual({
    cells: [null, null, null, null, null, null, null, null, null],
    player: players.CROSS,
  });
});
