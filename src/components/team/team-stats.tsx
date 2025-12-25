export function TeamStats() {
  const stats = [
    { label: "Total Agents", value: "9", color: "text-foreground" },
    { label: "Development Phases", value: "4", color: "text-brand-cyan" },
    { label: "Months Timeline", value: "12", color: "text-brand-indigo" },
    { label: "Sprints Planned", value: "24", color: "text-agent-atlas" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-border bg-surface rounded-lg border p-4"
        >
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-muted text-xs">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
