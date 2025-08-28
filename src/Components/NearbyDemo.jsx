const MOCK_ARTISANS = [
  { id: 1, name: "Isak – Plumber", distanceKm: 1.2, rating: 4.8 },
  { id: 2, name: "Chioma – Electrician", distanceKm: 2.5, rating: 4.7 },
  { id: 3, name: "Kunle – Carpenter", distanceKm: 3.1, rating: 4.6 },
];

export default function NearbyDemo() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-20">
      <h2 className="text-left text-3xl font-bold text-white">
        Find artisans near you
      </h2>
      <p className="text-slate-300 mt-2">
        Demo preview — showing mocked results around your area.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6 items-start">
        <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/30">
          <img
            alt="Map demo"
            src="/src/assets/map.jpg"
            className="w-full h-[300px] object-cover"
          />
        </div>

        <ul className="space-y-3">
          {MOCK_ARTISANS.map((a) => (
            <li
              key={a.id}
              className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 flex items-center justify-between"
            >
              <div>
                <p className="text-white font-semibold">{a.name}</p>
                <p className="text-slate-400 text-sm">{a.distanceKm} km away</p>
              </div>
              <div className="text-sm text-yellow-300 font-semibold">
                ★ {a.rating.toFixed(1)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
