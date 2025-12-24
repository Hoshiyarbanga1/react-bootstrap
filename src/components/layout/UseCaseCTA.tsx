import "../../assets/style/UseCaseCTA.css";
import UseCaseHeader from "../ui/UseCaseHeader";
import UseCaseText from "../ui/UseCaseText";
import UseCaseActions from "../ui/UseCaseActions";

function UseCaseCTA() {
  return (
    <section className="usecase-cta-section py-5">
      <div className="container">
        <div className="usecase-cta-box text-center mx-auto">
          <UseCaseHeader>Got a use case in mind? Let’s make it real.</UseCaseHeader>

          <UseCaseText>
            Our team of AI experts is just a call away. Whether you're exploring
            ideas or ready to build, we’ll help you bring your AI agent to life
            – faster.
          </UseCaseText>

          <UseCaseActions />
        </div>
      </div>
    </section>
  );
}

export default UseCaseCTA;
