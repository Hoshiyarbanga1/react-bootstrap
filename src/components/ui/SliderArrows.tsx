import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  leftClass?: string;
  rightClass?: string;
};

export default function SliderArrows({ leftClass = "", rightClass = "" }: Props) {
  return (
    <div className="slider-arrows position-absolute d-flex align-items-center gap-2">
      <button className={`slider-btn ${leftClass}`}>
        <ArrowLeft size={18} />
      </button>

      <button className={`slider-btn ${rightClass}`}>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
