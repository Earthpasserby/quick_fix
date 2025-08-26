const items = [
  {
    title: "Location-based matching",
    desc: "See nearby artisans in real time, ETAs, and transparent rates.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Verified and rated",
    desc: "Profiles with reviews, certifications, and ID verification.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Secure payments",
    desc: "Pay in-app after completion. Cards, transfers, and receipts.",
    img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "24/7 support",
    desc: "Dispute resolution and customer care when you need it.",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 my-16">
      <h2 className="text-left text-3xl font-bold text-white animate-slide-up">
        Why QuickFix
      </h2>
      <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, index) => (
          <div
            key={it.title}
            className="rounded-xl border border-slate-700/50 overflow-hidden bg-slate-800/30 backdrop-blur-sm hover:border-brand/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/10 group animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={it.img}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-white group-hover:text-brand transition-colors duration-300">
                {it.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
