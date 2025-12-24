import "../../assets/style/stylesheet.css";

type Props = {
  tabs: string[];
};

export default function AgentTabs({ tabs }: Props) {
  return (
    <>
      <div className="container my-5">
        <div className="agent-tabs-wrapper d-flex w-100">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`agent-tab-pill flex-fill ${i === 0 ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
