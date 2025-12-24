type Props = { title: string; subtitle?: string };

export default function SubscribeHeader({ title, subtitle }: Props) {
  return (
    <>
      <h3 className="subscribe-title fs-1">{title}</h3>
      {subtitle && <p className="subscribe-text fs-5">{subtitle}</p>}
    </>
  );
}
