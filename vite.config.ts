import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path';

const config: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      $fonts: resolve('./public/fonts')
    }
  }
};

export default config;