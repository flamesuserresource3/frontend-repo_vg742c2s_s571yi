import { Bot, User } from "lucide-react";

export default function ChatBubble({ role = "bot", text, time, typing = false }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
          <Bot size={16} />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-sm"
            : "bg-white border rounded-bl-sm"
        }`}
      >
        {typing ? (
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 bg-gray-400/70 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="h-2 w-2 bg-gray-400/70 rounded-full animate-bounce" style={{ animationDelay: "100ms" }} />
            <span className="h-2 w-2 bg-gray-400/70 rounded-full animate-bounce" style={{ animationDelay: "200ms" }} />
          </div>
        ) : (
          <p>{text}</p>
        )}
        {time && (
          <div className={`mt-1 text-[10px] ${isUser ? "text-indigo-100/80" : "text-gray-400"}`}>{time}</div>
        )}
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
          <User size={16} />
        </div>
      )}
    </div>
  );
}
