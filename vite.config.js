import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/cr-bar-charts-for-comparisons/",
  plugins: [react()],
});
