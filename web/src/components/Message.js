import "../styles/message.css"

export default function Message({ count }) {
  return (
    <div className="message">
      <span className="message-number">{count}</span>
    </div>
  );
}