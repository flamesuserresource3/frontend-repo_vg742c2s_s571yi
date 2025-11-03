import { Bot, Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow">
            <Bot size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold tracking-tight">Support Assistant</h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Online
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-snug">Ask anything. Quick answers, 24/7.</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-sm text-gray-600">
          <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors">
            <Phone size={16} />
            Call
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors">
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
