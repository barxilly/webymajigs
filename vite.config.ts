import { UserConfig } from 'vite'
import { resolve } from 'path';

const config: UserConfig = {
  resolve: {
    alias: {
      $fonts: resolve('./public/fonts')
    }
  }
};

export default config;