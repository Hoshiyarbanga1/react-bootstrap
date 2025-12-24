import "../../assets/style/GetStarted.css";
import GetStartedImage from "../ui/GetStartedImage";
import GetStartedCTA from "../ui/GetStartedCTA";
import AckGrid from "../ui/AckGrid";

const heroImg =
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/10/how-to-get-stareted-with-lyzr_compressed-2048x703.webp";

const ackLogos = [
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2025/01/Harvard_innovation.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2024/11/vector-1.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2024/12/HFS_research.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2024/11/vector-3.webp",
  "https://cdn-ileecnj.nitrocdn.com/JHsXwyfxJOYTadtVKgrLqQCwYuZZjQpq/assets/images/optimized/rev-72cea9a/www.lyzr.ai/wp-content/uploads/2024/11/vector-4.webp",
];

function GetStarted() {
  return (
    <section className="get-started-section py-5">
      <div className="container text-center">

        <h1 className="mb-5 fw-semibold">How to get started with Lyzr?</h1>

        <div className="px-2">
          <GetStartedImage src={heroImg} alt="How to get started with Lyzr" />
        </div>

        <GetStartedCTA />

        <div className="acknowledgement-section mt-5 pt-5">
          <h3 className="fw-semibold mb-4">Acknowledged across the AI frontier</h3>
          <AckGrid logos={ackLogos} />
        </div>

      </div>
    </section>
  );
}

export default GetStarted;
