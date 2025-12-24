import "../../assets/style/Trusted.css";
import LogoGrid from "../ui/LogoGrid";
import AgentTabs from "../ui/AgentTabs";
import AgentCard from "../ui/AgentCard";
import GradientCTA from "../ui/GradientCTA";

const topLogos = [
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-53534.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-53541.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54213.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54207.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54221.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54217.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54225.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54205.webp",
];

const bottomLogos = [
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54205.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-53539.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54209.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-lt-logo.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-54216.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-goml.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-rootquotient.webp",
];

const tabs = ["HR", "Marketing", "Sales", "Support", "Banking", "Insurance"];

const agents = [
  { label: "AI L&D\nAgent", variant: "border-green" },
  { label: "AI Performance\nReview Agent", variant: "border-cyan" },
  { label: "Employee\nOnboarding Agent", variant: "border-purple" },
  { label: "AI Hiring\nAssistant", variant: "border-pink" },
  { label: "Policy Generator\nAgent", variant: "border-orange" },
  { label: "HR HelpDesk\nAgent", variant: "border-gray" },
  { label: "Interview Analysis\nAgent", variant: "border-blue" },
  { label: "AI Resume\nFiltering", variant: "border-dark", wide: true },
  { label: "Job Description\nGenerator", variant: "border-orange-light" },
];

function Trusted() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center mb-5 mt-5">
        <h5 className="fw-semibold mb-5">Trusted by leaders: Real-world AI impact.</h5>
        <LogoGrid logos={topLogos} />
        <div className="row mt-5 gap-5">
          <LogoGrid logos={bottomLogos} />
        </div>
      </div>

      <div className="container main mb-5">
        <div className="row align-items-start mt-5 g-5">
          <div className="col-lg-4 pt-5">
            <h2 className="fw-bold mb-4">
              Pre-built agents
              <br />
              powering the future
              <br />
              of work
            </h2>

            <p className="text-muted mb-4">
              Jump-start your AI roadmap with production-ready agents designed
              for real enterprise workflows – built to deploy safely in your
              cloud from day one.
            </p>

            <GradientCTA />
          </div>

          <div className="col-lg-8">
            <AgentTabs tabs={tabs} />

            <div className="row g-4">
              {agents.map((a, i) => (
                <div key={i} className="col-md-4">
                  <AgentCard label={a.label} variant={a.variant} wide={!!a.wide} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
