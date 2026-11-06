import fs from 'node:fs';
import path from 'node:path';

/**
 * Safely resolves an environment variable with priority to .env (for local dev)
 * and fallback to process.env (for Vercel/Node deployment).
 */
export function getEnvVar(key: string, defaultValue = ''): string {
  // 1. Try reading directly from .env file first (for live local development)
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const k = trimmed.slice(0, eqIdx).trim();
            if (k === key) {
              let v = trimmed.slice(eqIdx + 1).trim();
              if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
                v = v.slice(1, -1);
              }
              if (v && !v.startsWith('re_your_') && !v.includes('your-email@example.com')) {
                return v;
              }
            }
          }
        }
      }
    }
  } catch {
    // Ignore error in environments where filesystem is restricted
  }

  // 2. Fallback to process.env (for Vercel production deployment)
  const envVal = process.env[key];
  if (envVal && !envVal.startsWith('re_your_') && !envVal.includes('your-email@example.com')) {
    return envVal;
  }

  return defaultValue;
}

