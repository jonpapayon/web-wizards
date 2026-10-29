import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://jonpapayon.github.io",
  base: "/web-wizards",
  integrations: [react()],
});