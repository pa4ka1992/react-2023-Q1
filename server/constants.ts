import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const root = process.cwd();

export const isProd = process.env.NODE_ENV === 'production';

export const PER_PAGE = 28;

export const PAGE = Math.round(0.5 + Math.random() * 999);

export const resolve = (p: string) => path.resolve(__dirname, p);
