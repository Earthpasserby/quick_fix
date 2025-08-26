export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-20">
      <div className="rounded-2xl border border-slate-700/50 p-6 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-brand/50 transition-all duration-500 hover:scale-[1.02] animate-slide-up">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Building the full app next
            </h2>
            <p className="text-slate-300 mt-2">
              We are launching iOS, Android, and web with real-time location,
              bookings, and payments.
            </p>
          </div>
          <a
            href="#"
            className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
