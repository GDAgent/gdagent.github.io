import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(__dirname, '..');

export default defineConfig({
  site: 'https://gdagent.github.io',
  output: 'static',
  vite: {
    envDir: workspaceRoot,
    plugins: [tailwindcss()],
  },
});
