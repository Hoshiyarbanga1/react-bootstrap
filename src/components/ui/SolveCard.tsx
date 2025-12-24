type Props = {
  colorClass?: string;
  title: string;
  children: React.ReactNode;
};

export default function SolveCard({ colorClass = "", title, children }: Props) {
  return (
    <div className="solve-card">
      <span className={`solve-bar ${colorClass}`}></span>
      <h5 className="pb-5">{title}</h5>
      <p className="pt-5">{children}</p>
    </div>
  );
}
