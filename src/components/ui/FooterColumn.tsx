type FooterColumnProps = {
  title: string;
  items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h6 className="footer-title">{title}</h6>
      <ul className="footer-list">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
