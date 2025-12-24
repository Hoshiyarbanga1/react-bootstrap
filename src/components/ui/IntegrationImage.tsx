type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function IntegrationImage({ src, alt = "", className = "" }: Props) {
  return <div className="p-5"><img className={`img-fluid ${className}`} src={src} alt={alt} /></div>;
}
