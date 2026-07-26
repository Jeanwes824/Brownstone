import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "outlineLight";

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-copper text-white hover:bg-copper-dark shadow-card hover:-translate-y-0.5",
  secondary: "bg-maroon text-white hover:bg-maroon-dark hover:-translate-y-0.5",
  outline: "border-2 border-maroon text-maroon hover:bg-maroon hover:text-white",
  outlineLight:
    "border-2 border-white/70 text-white hover:bg-white hover:text-maroon",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
  const classes = cn(base, variants[variant], className);
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...(rest as any)}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

export function ButtonAction({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
