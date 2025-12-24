import SliderDots from "./SliderDots";
import SliderArrows from "./SliderArrows";

type Props = {
  logoSrc?: string;
  logoAlt?: string;
  headerImg?: string;
  quote: string;
  role?: string;
  caseStudyHref?: string;
  dots?: number;
  activeDot?: number;
};

export default function TestimonialCard({
  logoSrc,
  logoAlt = "",
  headerImg,
  quote,
  role,
  caseStudyHref = "#",
  dots = 3,
  activeDot = 0,
}: Props) {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="row g-0 insiders-card rounded-4 overflow-hidden">

          <div className="col-md-5 d-flex align-items-center justify-content-center insiders-logo">
            {logoSrc && (
              <span className="accenture-logo">
                <img className="img-fluid" src={logoSrc} alt={logoAlt} />
              </span>
            )}
          </div>

          <div className="col-md-7 p-5 position-relative">
            {headerImg && (
              <h6 className="fw-semibold mb-3">
                <img className="img-fluid-custom" src={headerImg} alt="" />
              </h6>
            )}

            <p className="fs-5 mb-4">{quote}</p>

            {role && <p className="text-muted mb-2">{role}</p>}

            <a href={caseStudyHref} className="case-study-link">
              Case Study
            </a>

            <div className="d-flex gap-2 position-absolute bottom-0 start-0 mb-3 ms-4">
              <SliderDots count={dots} activeIndex={activeDot} />
            </div>

            <div className="d-flex gap-2 position-absolute bottom-0 end-0 mb-3 me-4">
              <SliderArrows leftClass="" rightClass="active" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
