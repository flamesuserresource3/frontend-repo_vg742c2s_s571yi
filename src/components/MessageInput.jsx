import { useState } from "react";
import { Send } from "lucide-react";

export default function MessageInput({ onSend, placeholder = "Type your message..." }) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-white p-3">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-end gap-2">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder={placeholder}
            className="flex-1 resize-none rounded-2xl border bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSend}
            className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-indigo-600 text-white shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="mt-2 text-[11px] text-gray-500 text-center">Demo preview — responses are simulated.</p>
      </div>
    </div>
  );
}
