// import Animatedbutton from "./Animatedbutton";
import ButtonCard from "./ButtonCard";
import LiveAgentButton from "./LiveAgentButton";

export default function NavCTA() {
  return (
    <div className="nav-cta d-flex">
      {/* <Animatedbutton /> */}
      <LiveAgentButton />
      <ButtonCard />
    </div>
  );
}
