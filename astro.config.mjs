import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite'
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n.com",
  integrations: [preact({ compat: true })],
  vite: {
    plugins: [tailwindcss()]
  }
});