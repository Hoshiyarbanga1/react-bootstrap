import "../../assets/style/industryUseCases.css";
import SliderDots from "../ui/SliderDots";
import SliderArrows from "../ui/SliderArrows";
import IndustryImage from "../ui/IndustryImage";

function IndustrySlider() {
  const img =
    "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/10/firstsource-workflow-logo-09.avif";

  return (
    <section className="industry-slider-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="industry-slider-title mt-5 mb-5">
          See what industry leaders are building on Lyzr
        </h2>

        <div className="position-relative mt-5">
          <IndustryImage src={img} alt="Industry workflow" className="img-fluid w-100 rounded-4 industry-slider-image" />

          <div className="slider-dots position-absolute start-50 translate-middle-x d-flex gap-2">
            <SliderDots count={3} activeIndex={1} />
          </div>

          <SliderArrows leftClass="" rightClass="active" />
        </div>
      </div>
    </section>
  );
}

export default IndustrySlider;
