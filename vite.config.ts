/// <reference types="vitest" />
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: { port: 3001 },
  test: {
    root: "./",
    include: ["**/*.test.ts?(x)"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
      "**/__tests__/**",
    ],
  },
});
