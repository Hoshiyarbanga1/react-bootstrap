type Props = {
  src: string;
  className?: string;
  alt?: string;
};

export default function ComplianceBadges({ src, className = "", alt = "" }: Props) {
  return (
    <div className={className + " d-flex flex-wrap align-items-center gap-4 justify-content-center justify-content-lg-start"}>
      <img className="img-fluid" src={src} alt={alt || "compliance badges"} />
    </div>
  );
}
