import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/sridhar-portfolio/',
  theme: {
    extend: {
      screens: {
        'xl': {'max': '1200px'},
        'lg': {'max': '1080px'},
        'md-lg': {'max': '991px'},
        'md': {'max': '768px'},
        'sm': {'max': '576px'},
        'xs': {'max': '480px'},
        '2xs': {'max': '340px'},
      },
    },
  },
})
