type Props = { text: string };

export default function HeroBadge({ text }: Props) {
  return (
    <span className="hero-badge d-inline-block mb-4 fs-6 fw-normal">{text}</span>
  );
}
