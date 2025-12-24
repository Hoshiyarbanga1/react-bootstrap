import "../../assets/style/whatLyzrSolves.css";
import SolveCard from "../ui/SolveCard";

const cards = [
  {
    color: "blue",
    title: "End-to-end agent production",
    text:
      "We turn agent concepts into fully deployed, enterprise-grade systems inside your cloud – fast, stable, and compliant.",
  },
  {
    color: "red",
    title: "Total data & IP protection",
    text:
      "Your data stays in your VPC/on-prem. Your agents remain 100% your IP. Nothing leaves your environment.",
  },
  {
    color: "green",
    title: "Unified agent lifecycle",
    text:
      "One platform to build, orchestrate, evaluate, deploy, and govern agents – without stitching tools or managing complexity.",
  },
  {
    color: "brown",
    title: "Enterprise reliability at scale",
    text:
      "From blueprint acceleration to 10K+ simulations, agents are hardened to handle real workloads across teams and functions.",
  },
];

function WhatLyzrSolves() {
  return (
    <section className="lyzr-solves-section py-5 bg-white">
      <div className="container">

        <div className="row mb-5 align-items-start">
          <div className="col-lg-6">
            <h2 className="lyzr-solves-title">What Lyzr Actually Solves?</h2>
          </div>
          <div className="col-lg-6">
            <p className="lyzr-solves-subtitle">
              Lyzr solves the hardest parts of taking AI agents from idea to
              enterprise production – securely, reliably, and at scale.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {cards.map((c, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <SolveCard colorClass={c.color} title={c.title}>
                {c.text}
              </SolveCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatLyzrSolves;
