import "../../assets/style/Trusted.css";

type Props = {
  tabs: string[];
};

export default function AgentTabs({ tabs }: Props) {
  return (
    <div className="agent-tabs mb-5">
      {tabs.map((t, i) => (
        <button key={i} className={`tab ${i === 0 ? "active" : ""}`}>
          {t}
        </button>
      ))}
    </div>
  );
}
