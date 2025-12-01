import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
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
