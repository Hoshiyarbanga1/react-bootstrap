import GradientCTA from "./GradientCTA";

export default function HeroCTA() {
  return (
    <div className="hero-cta mx-auto mb-5">
      <div className="row g-2 align-items-center">
        <div className="col-12 col-md">
          <input
            type="email"
            className="form-control hero-input fs-6"
            placeholder="Enter your work email"
          />
        </div>

        <div className="col-12 col-md-auto">
          <GradientCTA />
        </div>
      </div>
    </div>
  );
}
