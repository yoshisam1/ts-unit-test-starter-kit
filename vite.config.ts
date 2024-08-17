import type { UserConfig } from "vite";
import { coverageConfigDefaults } from "vitest/config";

export default {
  base: "/ts-unit-test-starter-kit/",
  test: {
    coverage: {
      exclude: ["**/main.ts", ...coverageConfigDefaults.exclude],
    },
  },
} satisfies UserConfig;
