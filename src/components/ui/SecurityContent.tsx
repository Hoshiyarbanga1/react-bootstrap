type Props = {
  title: React.ReactNode;
  text: string;
  className?: string;
};

export default function SecurityContent({ title, text, className = "" }: Props) {
  return (
    <div className={className}>
      <h2 className="fw-semibold fs-1 mb-3">{title}</h2>
      <p className="text-muted mb-0">{text}</p>
    </div>
  );
}
