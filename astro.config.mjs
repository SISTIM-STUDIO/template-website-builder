import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://sistim-studio.github.io",
  base: isGitHubActions ? "/template-website-builder" : "/",
  trailingSlash: "always",
});
