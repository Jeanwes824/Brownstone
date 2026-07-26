/**
 * Tiny className joiner — filters out falsy values and joins with a space.
 * Keeps components dependency-free without pulling in clsx/tailwind-merge.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
