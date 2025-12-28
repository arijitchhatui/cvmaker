import { apiPrefix, clientDistPath } from "./constants";

const constants = {
  apiPrefix,
  clientDistPath,
};

describe("constants", () => {
  it("should match the snapshot", (): void => {
    expect(constants).toMatchSnapshot();
  });
});
