import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

export default function ChatWindow({ messages, typing }) {
  const scroller = useRef(null);

  useEffect(() => {
    if (scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <div ref={scroller} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
      {messages.map((m, i) => (
        <ChatBubble key={i} role={m.role} text={m.text} time={m.time} />
      ))}
      {typing && <ChatBubble role="bot" typing />}
    </div>
  );
}
