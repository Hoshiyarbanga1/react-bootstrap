import "../../assets/style/footer.css";
import FooterBrand from "../ui/FooterBrand";
import FooterColumn from "../ui/FooterColumn";
import FooterBottom from "../ui/FooterBottom";

function Footer() {
  const company = [
    "About Us",
    "Wall of Love",
    "Pricing",
    "Lyzr raises Series A",
    "News",
    "Contact Us",
    "Careers",
    "Series A Round",
  ];

  const solutions = [
    "Banking",
    "Insurance",
    "Sales",
    "Marketing",
    "HR",
    "Customer Service",
    "Financial Services",
  ];

  const agents = [
    "Jazon - AI SDR",
    "Skott - AI Marketer",
    "Dwight - AI RFP Scout",
    "Diane - AI HR agent",
    "Kathy - AI Competitor Analyst",
    "Jeff - AI Support agent",
  ];

  const platform = ["Agent studio", "Responsible AI", "OGI", "Enterprise", "AWS partnership"];

  const caseStudies = [
    "Leading HR tech innovator",
    "Leading energy provider",
    "Global IT giant",
    "HR & workforce leader",
    "Customer service leader",
    "Industrial manufacturing firm",
  ];

  const comparisons = [
    "Lyzr vs Agentforce",
    "Lyzr vs Langchain",
    "Lyzr vs Crewai",
    "Lyzr vs Microsoft Copilot",
    "Lyzr vs Google AgentKit",
    "Lyzr vs n8n",
  ];

  const templates = ["101 AI Use Cases", "12 AI Marketing Use Cases", "AI Agents Use Cases for HR"];

  const playbooks = [
    "HR Automation",
    "Sales Automation",
    "Banking Automation",
    "Content Marketing",
    "GTM Marketing",
    "Agents to production",
    "Performance Management",
    "Fundraising Agent",
    "Agentforce Alternative",
  ];

  const resources = [
    "Blog",
    "Glossary",
    "Webinars",
    "Courses",
    "Usecases",
    "Videos",
    "State of AI Agents",
    "Agent Architect Cohort",
    "AI Readiness Assessment",
    "Research",
  ];

  return (
    <footer className="lyzr-footer">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3">
            <FooterBrand />
          </div>

          <div className="col-lg-2">
            <FooterColumn title="Company" items={company} />
          </div>

          <div className="col-lg-2">
            <FooterColumn title="Solutions" items={solutions} />
          </div>

          <div className="col-lg-3">
            <FooterColumn title="Agents" items={agents} />
          </div>

          <div className="col-lg-2">
            <FooterColumn title="Platform" items={platform} />
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row gy-4">
          <div className="col-lg-3">
            <FooterColumn title="Case Studies" items={caseStudies} />
          </div>

          <div className="col-lg-2">
            <FooterColumn title="Comparisons" items={comparisons} />
          </div>

          <div className="col-lg-2">
            <FooterColumn title="Templates" items={templates} />
          </div>

          <div className="col-lg-3">
            <FooterColumn title="Playbooks" items={playbooks} />
          </div>

          <div className="col-lg-2">
            <FooterColumn title="Resources" items={resources} />
          </div>
        </div>

        <hr className="footer-divider" />

        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
