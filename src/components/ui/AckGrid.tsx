type Props = { logos: string[] };

export default function AckGrid({ logos }: Props) {
  return (
    <div className="row align-items-center gap-5 opacity-75 mt-4">
      {logos.map((src, i) => (
        <div key={i} className="col-6 col-md-2">
          <img className="img-fluid-abc" src={src} alt={`ack-${i}`} />
        </div>
      ))}
    </div>
  );
}
