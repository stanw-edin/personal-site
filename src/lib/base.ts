// Prefixes an absolute path with the site's base path (set in astro.config.mjs).
// Use this for every internal link and every reference to a file in public/ -
// hardcoding "/cv" or "/photos/x.svg" directly breaks as soon as `base` is set
// to anything other than "/".
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/personal-site/" or "/"
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}` || '/';
}
