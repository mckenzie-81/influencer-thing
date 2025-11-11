import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="150"
      height="37.5"
      {...props}
    >
      <text
        x="0"
        y="35"
        fontFamily="'PT Sans', sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        Connect
        <tspan fill="hsl(var(--foreground))">Verse</tspan>
      </text>
    </svg>
  );
}
