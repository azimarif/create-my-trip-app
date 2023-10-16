import renderer from "react-test-renderer";

import App from "./App";

describe("App", () => {
  it("renders learn react link", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
