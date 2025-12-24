import "../../assets/style/stylesheet.css";
import { ArrowUpRight } from "lucide-react"

function ButtonCard() {
  return (
    <>
    <div className="common d-flex gap-2 ms-5">
                <button className="btn btn-agent">
              Agent Studio <ArrowUpRight size={16} />
            </button>

            <button className="btn btn-talk">
              Talk to us <ArrowUpRight size={16} />
            </button>
            </div>
    </>
  )
}

export default ButtonCard