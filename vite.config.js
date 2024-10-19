import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the app to the local network
    port: 3000        // Specify a custom port (default is 5173, you can change to any available port)
  }
})
