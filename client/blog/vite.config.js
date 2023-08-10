import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
        // Define a proxy rule for requests that start with "/api"
        "/api": {
          // Specify the target URL to forward the requests to
          target: "http://localhost:5000",
          
          // Disable SSL certificate verification for the target server
          secure: false,
        },
    },

  },
  plugins: [react()],
});