import { describe, expect, it } from "vitest";
import { validateUsername } from "./api";

describe("test validate username function", () => {
  describe("test valid usernames", () => {
    it("should accept username without spaces", () => {
      const username = "RajeshHamal";
      expect(() => validateUsername(username)).not.toThrow();
    });

    it("should accept username with numbers", () => {
      const username = "RajeshHamal123";
      expect(() => validateUsername(username)).not.toThrow();
    });

    it("should accept username with hyphens", () => {
      expect(() => validateUsername("Rajesh-Hamal")).not.toThrow();
      expect(() => validateUsername("Rajesh-Hamal-")).not.toThrow();
    });

    it("should accept username with string, numbers and hyphens", () => {
      const username = "Rajesh-Hamal-123";
      expect(() => validateUsername(username)).not.toThrow();
    });
  });

  describe("test invalid usernames", () => {
    it("should throw invalid username", () => {
      const username = "Rajesh-123$£Hamal";

      expect(() => validateUsername(username)).toThrow("Invalid username");
    });
  });
});
