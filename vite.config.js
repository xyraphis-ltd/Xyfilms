import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // The showreel is ~11 MB; keep it as a separate hashed file rather than inlining.
    assetsInlineLimit: 4096,
  },
});
