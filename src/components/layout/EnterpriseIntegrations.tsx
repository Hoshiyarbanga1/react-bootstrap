import "../../assets/style/EnterpriseIntegrations.css";
import IntegrationImage from "../ui/IntegrationImage";
import IntegrationHeader from "../ui/IntegrationHeader";

const imgSrc =
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/Frame-1797-2048x357.webp";

function EnterpriseIntegrations() {
  return (
    <section className="enterprise-integrations-section py-5">
      <div className="container text-center">
        <IntegrationHeader title={"Enterprise - ready integrations"} subtitle={"Seamless connectivity with Lyzr"} />
        <IntegrationImage src={imgSrc} alt="Enterprise integrations" />
      </div>
    </section>
  );
}

export default EnterpriseIntegrations;
