import logo from "../../assets/images/image.png";
import SocialIcons from "./SocialIcons";

function FooterBrand() {
  return (
    <div>
      <img src={logo} alt="Lyzr" className="footer-logo mb-3" />
      <p className="footer-desc">Build reliable, private and self-learning AI agents.</p>

      <p className="footer-title mt-4">Address</p>
      <p className="footer-text">
        155 2nd street, #108,
        <br />
        Jersey City, NJ, 07302
      </p>

      <SocialIcons />
    </div>
  );
}

export default FooterBrand;
