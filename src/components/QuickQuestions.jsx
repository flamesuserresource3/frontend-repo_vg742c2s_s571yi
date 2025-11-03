const defaults = [
  "What are your pricing options?",
  "How can I track my order?",
  "Do you offer refunds?",
  "Can I speak to a human agent?",
  "How do I reset my password?",
  "What's your SLA for enterprise?",
];

export default function QuickQuestions({ onSelect, items = defaults }) {
  return (
    <div className="w-full">
      <h2 className="text-sm font-medium text-gray-700 mb-3">Popular questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((q, i) => (
          <button
            key={i}
            onClick={() => onSelect(q)}
            className="text-left rounded-xl border bg-white hover:bg-gray-50 transition shadow-sm px-4 py-3 text-sm text-gray-800"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
