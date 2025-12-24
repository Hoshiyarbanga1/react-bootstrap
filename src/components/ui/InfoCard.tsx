type Props = {
  image?: string;
  imageAlt?: string;
  title?: string;
  text: string;
};

export default function InfoCard({ image, imageAlt = "", title, text }: Props) {
  return (
    <div className="h-100 p-4 bg-white rounded-4 shadow-sm">
      {image && (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img className="img-fluid-abc" src={image} alt={imageAlt} />
        </div>
      )}

      {title && (
        <>
          <h6 className="fw-semibold mb-2">{title}</h6>
        </>
      )}

      <p className="mb-0 text-muted">{text}</p>
    </div>
  );
}
