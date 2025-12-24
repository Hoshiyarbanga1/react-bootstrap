import "../../assets/style/SecurityCompliance.css";
import ComplianceBadges from "../ui/ComplianceBadges";
import SecurityContent from "../ui/SecurityContent";

const badgesSrc =
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/10/home-industry-grade-logos_compressed-2048x541.webp";

const title = (
  <>
    Industry-grade <br /> security and compliance
  </>
);

const text =
  "Lyzr Agent Studio gives you everything you need to build smarter, faster, and fully scalable AI solutions, all with industry-grade security and compliance.";

function SecurityCompliance() {
  return (
    <section className="security-section py-5">
      <div className="container py-5">
        <div className="row align-items-center py-5">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <ComplianceBadges src={badgesSrc} alt="industry badges" />
          </div>

          <div className="col-lg-6">
            <SecurityContent title={title} text={text} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SecurityCompliance;
