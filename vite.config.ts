/// <reference types="vitest/config" />

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          globals: true,
          environment: "node",
          include: ["src/**/*.unit.{test,spec}.{js,ts,jsx,tsx}"],
          exclude: ["node_modules/", "dist", ".git"],
        },
      },
      {
        test: {
          name: "component",
          globals: true,
          environment: "jsdom",
          setupFiles: ["./src/vitest.setup.ts"],
          css: true,
          include: ["src/**/*.component.{test,spec}.{js,ts,jsx,tsx}"],
          exclude: ["node_modules/", "dist", ".git"],
        },
      },
      {
        test: {
          name: "visual",
          globals: true,
          environment: "jsdom",
          setupFiles: ["./src/vitest.setup.ts"],
          css: true,
          include: ["src/**/*.visual.{test,spec}.{js,ts,jsx,tsx}"],
          exclude: ["node_modules/", "dist", ".git"],
        },
      },
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/**/*.d.ts", "**/*.config.ts"],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "Github Search",
        short_name: "ghsearch",
        description: "Find your github repositories and organizations.",
        start_url: "/",
        theme_color: "#ffffff",
      },
      pwaAssets: {
        config: true,
        overrideManifestIcons: true,
      },
    }),
  ],
});
