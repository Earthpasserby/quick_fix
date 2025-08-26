export default function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-4 my-16">
      <h2 className="text-left text-3xl font-bold text-white animate-slide-up">
        How it works
      </h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { step: 1, text: "Open QuickFix and share your location." },
          { step: 2, text: "Choose an artisan by skill, rating, and ETA." },
          {
            step: 3,
            text: "Track arrival, chat, and pay securely after the job.",
          },
        ].map((item, index) => (
          <div
            key={item.step}
            className="text-center p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-brand/50 transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              {item.step}
            </div>
            <p className="text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
