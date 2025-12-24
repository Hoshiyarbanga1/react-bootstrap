import { ChevronDown } from "lucide-react";

type Props = {
  label: string;
  href?: string;
  dropdown?: boolean;
};

export default function NavItem({ label, href = "#", dropdown = false }: Props) {
  return (
    <li className="nav-item">
      <a
        className={dropdown ? "nav-link d-flex align-items-center gap-1" : "nav-link"}
        href={href}
      >
        {label}
        {dropdown && <ChevronDown size={14} />}
      </a>
    </li>
  );
}
