type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function ImageLayer({ src, alt = "", className = "" }: Props) {
  return <img src={src} alt={alt} className={`ui-image ${className}`} />;
}
