import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Mark - Hexagonal Agent Mesh */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={sizeClasses[size]}
      >
        <defs>
          {/* Primary brand gradient - cyan to indigo to purple */}
          <linearGradient
            id="fabricGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          {/* Node gradient for connection points */}
          <linearGradient
            id="nodeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          {/* Accent gradient for central node */}
          <linearGradient
            id="accentGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fabric pattern (subtle) */}
        <g opacity="0.1">
          <line
            x1="30"
            y1="50"
            x2="170"
            y2="50"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="30"
            y1="75"
            x2="170"
            y2="75"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="30"
            y1="100"
            x2="170"
            y2="100"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="30"
            y1="125"
            x2="170"
            y2="125"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="30"
            y1="150"
            x2="170"
            y2="150"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="170"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="75"
            y1="30"
            x2="75"
            y2="170"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="100"
            y1="30"
            x2="100"
            y2="170"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="125"
            y1="30"
            x2="125"
            y2="170"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <line
            x1="150"
            y1="30"
            x2="150"
            y2="170"
            stroke="url(#fabricGradient)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        </g>

        {/* Hexagonal mesh mark */}
        <g transform="translate(100, 100)">
          {/* Hexagon outline */}
          <polygon
            points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
            fill="none"
            stroke="url(#fabricGradient)"
            strokeWidth="4"
          />

          {/* Inner connections */}
          <g opacity="0.5">
            <line
              x1="0"
              y1="-60"
              x2="0"
              y2="60"
              stroke="url(#fabricGradient)"
              strokeWidth="2"
            />
            <line
              x1="-52"
              y1="-30"
              x2="52"
              y2="30"
              stroke="url(#fabricGradient)"
              strokeWidth="2"
            />
            <line
              x1="-52"
              y1="30"
              x2="52"
              y2="-30"
              stroke="url(#fabricGradient)"
              strokeWidth="2"
            />
          </g>

          {/* Agent nodes */}
          <circle
            cx="0"
            cy="-60"
            r="10"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
          />
          <circle
            cx="52"
            cy="-30"
            r="10"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
          />
          <circle
            cx="52"
            cy="30"
            r="10"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
          />
          <circle
            cx="0"
            cy="60"
            r="10"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
          />
          <circle
            cx="-52"
            cy="30"
            r="10"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
          />
          <circle
            cx="-52"
            cy="-30"
            r="10"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
          />

          {/* Central orchestrator node */}
          <circle
            cx="0"
            cy="0"
            r="16"
            fill="url(#accentGradient)"
            filter="url(#glow)"
          />
          <circle cx="0" cy="0" r="8" fill="white" opacity="0.9" />
        </g>
      </svg>

      {/* Wordmark */}
      {showText && (
        <span
          className={cn(
            "font-display text-foreground font-bold tracking-tight",
            textSizeClasses[size]
          )}
        >
          Sage<span className="gradient-text-accent">Syn</span>
        </span>
      )}
    </div>
  );
}
