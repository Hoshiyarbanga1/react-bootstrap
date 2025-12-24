import "../../assets/style/Trusted.css";

type Props = {
  logos: string[];
  className?: string;
};

export default function LogoGrid({ logos, className = "" }: Props) {
  return (
    <div className={className}>
      <div className="row gap-5">
        {logos.map((src, i) => (
          <div key={i} className="col-3 col-md-1">
            <img src={src} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
