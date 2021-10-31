import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App";
import { store } from "./app/store";
import { gameStates } from "./app/constants";
import { reset } from "./features/board/boardSlice";
import { setGameState } from "./features/gameState/gameStateSlice";

// Framer motion + SVGs breaks tests so we need to replace our svg components with a placeholder
jest.mock("./features/board/Cross", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});
jest.mock("./features/board/Zero", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

describe("grid tests", () => {
  beforeEach(async () => {
    store.dispatch(reset());
    store.dispatch(setGameState(gameStates.START));
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByText("Start Game"));
    await screen.findByLabelText("tic-tac-toe-grid");
  });

  test("clicking a row of cells as cross wins the game", async () => {
    fireEvent.click(screen.getByLabelText("grid-cell-0")); // CROSS
    fireEvent.click(screen.getByLabelText("grid-cell-5")); // ZERO
    fireEvent.click(screen.getByLabelText("grid-cell-1")); // CROSS
    fireEvent.click(screen.getByLabelText("grid-cell-6")); // ZERO
    fireEvent.click(screen.getByLabelText("grid-cell-2")); // CROSS
    expect(store.getState().gameState.value).toEqual(gameStates.CROSS_WINS);
    expect(screen.getByText("Cross")).toBeInTheDocument();
    expect(screen.getByText("Play Again")).toBeInTheDocument();
  });

  test("clicking a row of cells as zero wins the game", async () => {
    fireEvent.click(screen.getByLabelText("grid-cell-0")); // CROSS
    fireEvent.click(screen.getByLabelText("grid-cell-3")); // ZERO
    fireEvent.click(screen.getByLabelText("grid-cell-7")); // CROSS
    fireEvent.click(screen.getByLabelText("grid-cell-4")); // ZERO
    fireEvent.click(screen.getByLabelText("grid-cell-2")); // CROSS
    fireEvent.click(screen.getByLabelText("grid-cell-5")); // ZERO
    expect(store.getState().gameState.value).toEqual(gameStates.ZERO_WINS);
    expect(screen.getByText("Zero")).toBeInTheDocument();
    expect(screen.getByText("Play Again")).toBeInTheDocument();
  });
});
