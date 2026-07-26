/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export — produces an `out/` folder of plain HTML/CSS/JS
  // that can be uploaded to any static host (e.g. Hostinger public_html).
  output: "export",
  // Each route becomes a folder with an index.html (e.g. /about/index.html),
  // which shared Apache/LiteSpeed hosts serve cleanly without rewrites.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; disable it for static export.
    // Images are already pre-sized, so they are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
