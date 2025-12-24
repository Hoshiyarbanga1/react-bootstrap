import "../../assets/style/WhyLyzr.css";
import WhyLargeCard from "../ui/WhyLargeCard";
import InfoCard from "../ui/InfoCard";

const topRight = {
  image:
    "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/saas-deploy-Frame.webp",
  title: "Enterprise control from day one",
  text:
    "Deploy in your VPC/on-prem with full RBAC, audit logs, HITL, and observability — built for regulated environments.",
};

const bottomCards = [
  {
    image:
      "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/11/platform-people-model.webp",
    titleTop: "Guarantee Production",
    title: "Platform + People model",
    text:
      "Forward-deployed engineers co-build with your team to guarantee production, not POCs.",
  },
  {
    image:
      "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/11/blueprint-powered-velocity-1.webp",
    title: "",
    text:
      "Hundreds of blueprints to launch secure, production-grade agents in weeks, not quarters.",
  },
  {
    image:
      "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/11/model-tool-freedom.webp",
    title: "Model & tool freedom",
    text: "Use any LLM, any vector DB, any cloud — zero lock-in.",
  },
];

function WhyLyzr() {
  return (
    <section className="why-lyzr-section bg-white py-5">
      <div className="container">
        <div className="row g-4 why-lyzr-wrapper p-4 rounded-4">

          <div className="col-lg-7">
            <WhyLargeCard title={"Why Lyzr? Your \n enterprise AI advantage."}>
              The agent platform trusted for secure deployment, faster delivery,
              and long-term reliability.
            </WhyLargeCard>
          </div>

          <div className="col-lg-5">
            <InfoCard image={topRight.image} title={topRight.title} text={topRight.text} />
          </div>

          {bottomCards.map((c, i) => (
            <div key={i} className="col-lg-4">
              <InfoCard image={c.image} title={c.title || undefined} text={c.text} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyLyzr;
