import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repoName = env.VITE_REPO_NAME || "Portofolio";
  return {
    base: `/${repoName}/`,
    plugins: [react(), tailwindcss()],
    server: { open: true }
  };
});