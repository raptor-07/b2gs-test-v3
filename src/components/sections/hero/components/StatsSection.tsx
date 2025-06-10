import { StatCard } from './StatCard';

const STATS = [
  {
    value: 20,
    label: "Direct Reduction in emissions through our waste management solutions",
  },
  {
    value: 80,
    label: "Recycling Yield from Waste Streams directly available to use as raw material",
  },
  {
    value: 5,
    label: "Indirect Cost Reduction in the form of compliance credits and Carbon Projects",
  },
];

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8">
      {STATS.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}
