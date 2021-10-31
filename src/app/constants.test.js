import constants from "./constants";

test("constants match snapshot", async () => {
  expect(constants).toMatchSnapshot();
});
