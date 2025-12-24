type Props = { onSubscribe?: (email: string) => void };

export default function SubscribeForm({ onSubscribe }: Props) {
  return (
    <div className="subscribe-box">
      <input
        type="email"
        placeholder="Enter your email"
        className="subscribe-input w-100"
      />
      <button className="subscribe-btn">Subscribe →</button>
    </div>
  );
}
