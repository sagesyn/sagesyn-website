import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Mark - Hexagonal Agent Mesh */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer hexagon */}
        <path
          d="M20 2L36.66 11V29L20 38L3.34 29V11L20 2Z"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
        />

        {/* Inner connections - agent mesh */}
        <g stroke="url(#logoGradient)" strokeWidth="1" opacity="0.7">
          {/* Center node connections */}
          <line x1="20" y1="20" x2="20" y2="8" />
          <line x1="20" y1="20" x2="30" y2="14" />
          <line x1="20" y1="20" x2="30" y2="26" />
          <line x1="20" y1="20" x2="20" y2="32" />
          <line x1="20" y1="20" x2="10" y2="26" />
          <line x1="20" y1="20" x2="10" y2="14" />
        </g>

        {/* Agent nodes */}
        <g filter="url(#glow)">
          {/* Center node */}
          <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
          {/* Outer nodes */}
          <circle cx="20" cy="8" r="2" fill="#00ffff" />
          <circle cx="30" cy="14" r="2" fill="#00ffff" />
          <circle cx="30" cy="26" r="2" fill="#ff00ff" />
          <circle cx="20" cy="32" r="2" fill="#ff00ff" />
          <circle cx="10" cy="26" r="2" fill="#00ffff" />
          <circle cx="10" cy="14" r="2" fill="#ff00ff" />
        </g>
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight text-foreground">
          Sage<span className="gradient-text">Syn</span>
        </span>
      )}
    </div>
  );
}
