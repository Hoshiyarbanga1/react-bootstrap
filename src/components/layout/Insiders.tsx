import "../../assets/style/Insiders.css";
import TestimonialCard from "../ui/TestimonialCard";

function Insiders() {
  const data = {
    logo: "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/08/hfs-testi-homev9.webp",
    headerImg:
      "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/04/hfs.webp",
    quote:
      "“Lyzr’s agent infrastructure reshaped how we deliver\nGenAI value to clients.”",
    role: "Global Technology Lead",
  };

  return (
    <section className="insiders-section py-5">
      <div className="container">
        <h2 className="text-center fw-semibold mb-5">Hear it from the insiders</h2>

        <TestimonialCard
          logoSrc={data.logo}
          headerImg={data.headerImg}
          quote={data.quote}
          role={data.role}
          caseStudyHref="#"
          dots={3}
          activeDot={0}
        />
      </div>
    </section>
  );
}

export default Insiders;
