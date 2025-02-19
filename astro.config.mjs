import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";

import playformCompress from "@playform/compress";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    markdoc(),
    playformCompress(),
  ],
  output: "static",
  adapter: cloudflare(),
});
