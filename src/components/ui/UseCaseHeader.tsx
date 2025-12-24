type Props = { children: React.ReactNode };

export default function UseCaseHeader({ children }: Props) {
  return <h2 className="usecase-title">{children}</h2>;
}
