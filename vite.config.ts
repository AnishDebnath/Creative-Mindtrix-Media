import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const disableHmr = env.DISABLE_HMR === 'true';

  // Inject Resend env vars into process.env for local development
  process.env.RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  process.env.RESEND_FROM_EMAIL = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL;
  process.env.CONTACT_RECEIVER_EMAIL = env.CONTACT_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-api-contact-handler',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            // Live-reload latest .env on local request
            const latestEnv = loadEnv(mode, process.cwd(), '');
            process.env.RESEND_API_KEY = latestEnv.RESEND_API_KEY || process.env.RESEND_API_KEY;
            process.env.RESEND_FROM_EMAIL = latestEnv.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL;
            process.env.CONTACT_RECEIVER_EMAIL = latestEnv.CONTACT_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;

            const { default: contactHandler } = await import('./api/contact.ts');
            await contactHandler(req, res);
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src'),
      },
    },
    server: {
      // HMR is disabled via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: !disableHmr,
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: disableHmr ? null : {},
    },
  };
});
