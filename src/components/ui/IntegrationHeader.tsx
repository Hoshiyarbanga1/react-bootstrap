type Props = {
  title: React.ReactNode;
  subtitle?: string;
};

export default function IntegrationHeader({ title, subtitle }: Props) {
  return (
    <>
      <h2 className="fw-semibold mb-2">{title}</h2>
      {subtitle && <p className="text-center fs-5 mt-2">{subtitle}</p>}
    </>
  );
}
