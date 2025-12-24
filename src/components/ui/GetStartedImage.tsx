type Props = {
  src: string;
  alt?: string;
};

export default function GetStartedImage({ src, alt = "" }: Props) {
  return <img className="img-fluid" src={src} alt={alt} />;
}
