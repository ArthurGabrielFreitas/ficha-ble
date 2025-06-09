import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ficha-ble', // ⚠️ importante: com barra no início e no fim
});
