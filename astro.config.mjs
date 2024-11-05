import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
// import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), playformCompress()],
  output: "hybrid",
  adapter: cloudflare()
});