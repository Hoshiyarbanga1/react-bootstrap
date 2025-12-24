import "../../assets/style/subscribeStrip.css";
import SubscribeHeader from "../ui/SubscribeHeader";
import SubscribeForm from "../ui/SubscribeForm";

const title = "Join 18,534+ subscribers";
const subtitle = "We share stories around AI agents every 2 weeks. No spam.";

function SubscribeStrip() {
  return (
    <section className="subscribe-strip">
      <div className="container">
        <div className="row align-items-center gy-3 py-5">
          <div className="col-lg-5 offset-lg-1 text-lg-start text-center">
            <SubscribeHeader title={title} subtitle={subtitle} />
          </div>

          <div className="col-lg-4">
            <SubscribeForm />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SubscribeStrip;
