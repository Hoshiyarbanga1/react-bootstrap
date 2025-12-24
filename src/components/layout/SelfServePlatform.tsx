import "../../assets/style/SelfServePlatform.css";
import ImageLayer from "../ui/ImageLayer";

function SelfServePlatform() {
  const left =
    "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/dev-scaled.webp";

  const center =
    "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/business-users-1-scaled.png";

  const right =
    "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/image-2-1.png";

  return (
    <section className="self-serve-section py-5 bg-primary position-relative overflow-hidden">
      <div className="container text-center">
        <h2 className="self-serve-title mb-5">
          Lyzr is a self-serve platform built
          <br />
          for every enterprise role
        </h2>
      </div>

      <div className="container-fluid position-relative self-serve-layer">
        <ImageLayer src={left} alt="Left UI" className="ui-left position-absolute" />

        <ImageLayer src={center} alt="Center UI" className="ui-center position-relative mx-auto d-block" />

        <ImageLayer src={right} alt="Right UI" className="ui-right position-absolute" />
      </div>
    </section>
  );
}

export default SelfServePlatform;
