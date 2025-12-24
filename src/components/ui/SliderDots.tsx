type Props = {
  count?: number;
  activeIndex?: number;
  className?: string;
};

export default function SliderDots({ count = 3, activeIndex = 1, className = "" }: Props) {
  const dots = Array.from({ length: count }, (_, i) => i);
  return (
    <div className={className}>
      {dots.map((d) => (
        <span key={d} className={`dot ${d === activeIndex ? "active" : ""}`}></span>
      ))}
    </div>
  );
}
