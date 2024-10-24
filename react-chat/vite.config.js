import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://romadovairina.github.io/2024-2-VK-EDU-Frontend-I-Romadova',
  build: {
    outDir: 'build', 
  },
})
