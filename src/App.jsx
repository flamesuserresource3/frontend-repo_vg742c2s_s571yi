import { useMemo, useState } from "react";
import Header from "./components/Header";
import QuickQuestions from "./components/QuickQuestions";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function simulateReply(userText) {
  // Simple scripted replies for the demo
  const text = userText.toLowerCase();
  if (text.includes("price") || text.includes("pricing")) {
    return "We offer Starter, Pro, and Enterprise plans. Most teams start on Pro at $29/user. Want a quick comparison?";
  }
  if (text.includes("order") || text.includes("track")) {
    return "You can track your order from your account > Orders. Drop the order ID and I can check it for you.";
  }
  if (text.includes("refund") || text.includes("return")) {
    return "We offer 30-day hassle-free refunds. Share your order number and reason, and I'll start the process.";
  }
  if (text.includes("password") || text.includes("reset")) {
    return "No worries! Use the 'Forgot password' link on the sign-in page. I can send you a reset link now if you like.";
  }
  if (text.includes("human") || text.includes("agent") || text.includes("support")) {
    return "I can connect you to a specialist. What issue are you facing? Live chat is available 9am–6pm local time.";
  }
  if (text.includes("sla") || text.includes("enterprise")) {
    return "Our enterprise SLA offers 99.9% uptime, 1-hour response, and a dedicated CSM. Want the detailed PDF?";
  }
  return "Thanks! I’m on it. Could you share a bit more detail so I can help better?";
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I’m your support assistant. Pick a question below or type your own to get started.",
      time: nowTime(),
    },
  ]);
  const [typing, setTyping] = useState(false);

  const popular = useMemo(
    () => [
      "What are your pricing options?",
      "How can I track my order?",
      "Do you offer refunds?",
      "Can I speak to a human agent?",
      "How do I reset my password?",
      "What's your SLA for enterprise?",
    ],
    []
  );

  const beginChatWith = (text) => {
    setStarted(true);
    setMessages((prev) => [...prev, { role: "user", text, time: nowTime() }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: simulateReply(text), time: nowTime() },
      ]);
      setTyping(false);
    }, 750);
  };

  const handleSend = (text) => beginChatWith(text);
  const handleSelect = (q) => beginChatWith(q);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main
        className={
          "mx-auto max-w-6xl w-full flex-1 grid gap-0 md:gap-6 px-0 md:px-6 py-0 md:py-6 " +
          "grid-rows-[1fr_auto] md:grid-cols-2 md:grid-rows-1 " +
          (started ? "overflow-hidden" : "")
        }
      >
        {/* Sidebar / Intro on desktop */}
        <section className="hidden md:flex flex-col gap-4 p-6 bg-gradient-to-b from-indigo-50 to-white rounded-2xl border">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">How can we help?</h2>
            <p className="text-sm text-gray-600 mt-1">Start with a quick question or open the chat to ask anything.</p>
          </div>
          <QuickQuestions items={popular} onSelect={handleSelect} />
          <div className="mt-auto text-xs text-gray-500">
            Secure and private. Your data stays protected.
          </div>
        </section>

        {/* Chat area */}
        <section className="flex flex-col min-h-0 border md:border-0 md:bg-transparent rounded-none md:rounded-2xl">
          {/* Mobile intro */}
          {!started && (
            <div className="md:hidden p-4 border-b">
              <h2 className="text-base font-medium">How can we help?</h2>
              <p className="text-sm text-gray-600">Pick a quick question to begin.</p>
            </div>
          )}
          {!started && (
            <div className="md:hidden p-4">
              <QuickQuestions items={popular} onSelect={handleSelect} />
            </div>
          )}

          <ChatWindow messages={messages} typing={typing} />
          <MessageInput onSend={handleSend} placeholder={started ? "Type a message" : "Ask anything to get started"} />
        </section>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500">
        Prototype preview for client demo.
      </footer>
    </div>
  );
}
