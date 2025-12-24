import logo from "../../assets/images/image.png";
import "../../assets/style/Navbar.css";
import NavItem from "../ui/NavItem";
import NavCTA from "../ui/NavCTA";

const items = [
  { label: "Functions" },
  { label: "Industries", dropdown: true },
  { label: "Product", dropdown: true },
  { label: "Customers" },
  { label: "Resources", dropdown: true },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top lyzr-navbar">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Lyzr" className="nav-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lyzrNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="lyzrNav">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-4">
            {items.map((it, i) => (
              <NavItem key={i} label={it.label} dropdown={it.dropdown} />
            ))}
          </ul>

          <NavCTA />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
