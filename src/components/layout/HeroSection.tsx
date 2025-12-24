
import "../../assets/style/herosection.css";
import HeroBadge from "../ui/HeroBadge";
import HeroTitle from "../ui/HeroTitle";
import HeroCTA from "../ui/HeroCTA";
import HeroStats from "../ui/HeroStats";

function HeroSection() {
  const badgeText = "Enterprise Agent Production Infrastructure";

  const stats = [
    { value: "1B+", label: "Agent simulations" },
    { value: "1M+", label: "Agents in production" },
    { value: "30,000+", label: "Builders" },
  ];

  return (
    <section className="hero-section">
      <div className="container text-center">
        <HeroBadge text={badgeText} />

        <HeroTitle>
          Reimagine Complex Enterprise Workflows <br />
          <span className="fst-italic text-primary">with Agentic AI Automation</span>
        </HeroTitle>

        <p className="hero-text mx-auto mb-5 fs-5 lh-lg text-dark">
          Lyzr combines an enterprise-grade agent platform with forward-deployed
          engineers to deliver production-ready AI systems tailored to your
          business — safely, privately, and in weeks, not quarters.
        </p>

        <HeroCTA />

        <HeroStats stats={stats} />
      </div>
    </section>
  );
}

export default HeroSection;
