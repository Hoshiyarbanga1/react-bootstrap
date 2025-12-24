import "../../assets/style/stylesheet.css";
import { ArrowUpRight } from "lucide-react";
import GradientCTA from "./GradientCTA";

function ButtonCard() {
  return (
    <>
      <div className="common d-flex gap-2 ms-5">
        <button className="btn btn-agent">
          Agent Studio <ArrowUpRight size={16} />
        </button>
        <GradientCTA />
      </div>
    </>
  );
}

export default ButtonCard;
