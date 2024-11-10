import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {

  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'service_m6zqb38': JSON.stringify(
        env.REACT_APP_SERVICE_ID,
      ),
      'template_atk9df3': JSON.stringify(
        env.REACT_APP_TEMPLATE_ID,
      ),
      'sA_P3nSKIOHL1Z_mt': JSON.stringify(
        env.REACT_APP_PUBLIC_KEY,
      ),
    },
  };
});
