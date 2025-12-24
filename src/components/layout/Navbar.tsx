import { useEffect, useState } from "react";
import logo from "../../assets/images/image.png";
import NavItem from "../ui/NavItem";
import NavCTA from "../ui/NavCTA";
import "../../assets/style/Navbar.css";
import "../../assets/style/stylesheet.css";

const items = [
  { label: "Functions" },
  { label: "Industries", dropdown: true },
  { label: "Product", dropdown: true },
  { label: "Customers" },
  { label: "Resources", dropdown: true },
];

type NavbarProps = {
  topbarVisible?: boolean;
};

function Navbar({ topbarVisible = true }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {topbarVisible && (
        <div id="topbar" className="lyzr-topbar">
          <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <span className="topbar-text">
              New launch: <strong>Lyzr’s 6 Sigma Agent</strong>
            </span>
            <a href="#" className="topbar-btn">
              Access now
            </a>
          </div>
        </div>
      )}

      <nav className={`navbar navbar-expand-lg lyzr-navbar px-3 ${isSticky ? "sticky" : ""}`}>
        <div className="container-fluid lyzr-nav-container">
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
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2">
              {items.map((it, i) => (
                <NavItem key={i} label={it.label} dropdown={it.dropdown} />
              ))}
            </ul>
            <NavCTA />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
