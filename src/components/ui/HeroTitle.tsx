type Props = { children?: any };

export default function HeroTitle({ children }: Props) {
  return <h1 className="hero-title mb-4 fw-semibold lh-sm">{children}</h1>;
}
