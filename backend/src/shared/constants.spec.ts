import { apiPrefix, clientDistPath, maxTimeoutMs } from "./constants";

describe("constants", () => {
  describe("apiPrefix", () => {
    it("should be 'api'", () => {
      expect(apiPrefix).toBe("api");
    });
  });

  describe("clientDistPath", () => {
    it("should end with 'frontend/dist'", () => {
      expect(clientDistPath.endsWith("frontend/dist")).toBe(true);
    });
  });

  describe("maxTimeoutMs", () => {
    it("should be 2 * 60000 milliseconds", () => {
      expect(maxTimeoutMs).toBe(2 * 60000);
    });
  });
});
