import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Board from "./Board";
import { store } from "../../app/store";
import { players } from "../../app/constants";

// Framer motion + SVGs breaks tests so we need to replace our svg components with a placeholder
jest.mock("./Cross", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

beforeEach(() => {
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
});

test("board is blank on first render", async () => {
  expect(store.getState().board.cells).toEqual([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
});

test("cross player is active on first render", async () => {
  expect(store.getState().board.player).toEqual(players.CROSS);
});

test("clicking cells updates the correct array item in the store", async () => {
  fireEvent.click(screen.getByLabelText("grid-cell-1"));
  expect(store.getState().board.cells[1]).toEqual(players.CROSS);
  expect(store.getState().board.player).toEqual(players.ZERO);
  fireEvent.click(screen.getByLabelText("grid-cell-5"));
  expect(store.getState().board.cells[5]).toEqual(players.ZERO);
  expect(store.getState().board.player).toEqual(players.CROSS);
});
