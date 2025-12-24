type Stat = { value: string; label: string };
type Props = { stats: Stat[] };

export default function HeroStats({ stats }: Props) {
  return (
    <div className="row justify-content-center gy-4 hero-stats">
      {stats.map((s, i) => (
        <div key={i} className="col-6 col-md-3">
          <h3 className="fw-semibold fs-4 text-primary">{s.value}</h3>
          <p className="mb-0 fs-6 text-secondary">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
