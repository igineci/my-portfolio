import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../lib/utils";

const badgeStyles =
  "inline-flex items-center justify-center rounded-full border px-2 py-1 text-md font-medium w-fit whitespace-nowrap shrink-0 bg-[#dddbd4] text-[#131313]";

function Badge({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeStyles, className)} {...props} />
  );
}

export { Badge };

// BadgeGroup component for displaying multiple badges
interface BadgeGroupProps {
  items: string[];
  className?: string;
}

export function BadgeGroup({ items, className = "" }: BadgeGroupProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Scrolling container */}
      <div className="flex animate-scroll-left gap-2 whitespace-nowrap">
        {/* First set of badges */}
        {items.map((item, index) => (
          <Badge key={`first-${index}`}>{item}</Badge>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <Badge key={`second-${index}`}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}
