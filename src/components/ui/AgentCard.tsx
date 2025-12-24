import "../../assets/style/Trusted.css";

type Props = {
  label: string;
  variant?: string;
  wide?: boolean;
};

export default function AgentCard({ label, variant = "", wide = false }: Props) {
  return (
    <div className={`agent-card ${variant} ${wide ? "wide" : ""}`}>
      {label.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
}
