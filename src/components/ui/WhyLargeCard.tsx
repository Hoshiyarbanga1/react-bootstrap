type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function WhyLargeCard({ title, children }: Props) {
  return (
    <div className="why-lyzr-gradient h-100 p-5 text-white rounded-4 d-flex flex-column justify-content-between">
      <div className="py-5">
        <h3 className="fw-semibold mb-3">{title}</h3>
        <p className="mb-0">{children}</p>
      </div>
    </div>
  );
}
