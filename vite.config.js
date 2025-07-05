import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  //  Proxy Setup to vite.config.js switch to this if needed to CORS issues.
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://chatapp-backend-vws5.onrender.com',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },

  // },
});
