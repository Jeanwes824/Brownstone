import Link from "next/link";
import Image from "next/image";

/**
 * Brand logo.
 *
 * Two files are used so the logo stays legible on both light and dark
 * backgrounds:
 *   /public/images/brand/logo.png        — full-color, for light backgrounds
 *   /public/images/brand/logo-white.png  — white, for the dark hero/footer
 *
 * Replace both placeholder files with the real logo artwork (transparent
 * PNG or SVG, ~400 × 128). If you only have one full-color version on a
 * transparent background, you can point both `src` values at it.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Brownstone Dredging & Infrastructure — home"
    >
      <Image
        src={light ? "/images/brand/logo-white.png" : "/images/brand/logo.png"}
        alt="Brownstone Dredging & Infrastructure"
        width={500}
        height={250}
        priority
        className="h-16 w-auto md:h-24"
      />
    </Link>
  );
}
