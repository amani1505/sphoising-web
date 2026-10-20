import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 font-sans text-fluid-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        // The one primary action in a view
        solid: "bg-action text-action-fg hover:bg-fg hover:text-surface",
        // Secondary action next to a solid button
        outline: "bg-surface text-fg ring-1 ring-border ring-inset hover:ring-fg",
      },
      size: {
        md: "py-2.5",
        lg: "py-3.5 px-6",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;

/** Button classes for links styled as buttons. Runs through cn() so a passed className overrides variant classes. */
export function buttonVariants({ className, ...variants }: ButtonVariantProps & { className?: string } = {}) {
  return cn(buttonStyles(variants), className);
}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & ButtonVariantProps) {
  return <button type={type} className={buttonVariants({ variant, size, className })} {...props} />;
}
