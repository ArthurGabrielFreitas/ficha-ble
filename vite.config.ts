import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fichable/', // ⚠️ importante: com barra no início e no fim
});
