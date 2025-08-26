export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center my-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Get trusted artisans on-demand, near you
        </h1>
        <p className="mt-4 text-slate-300 md:max-w-xl">
          QuickFix connects you to verified local artisans — plumbers,
          electricians, carpenters, and more — matching by proximity, rating,
          and availability. Like a ride-hailing app, but for getting things
          fixed fast.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 mb-2">
          <a
            href="#"
            className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25"
          >
            Get started
          </a>
          <a
            href="#how"
            className="font-semibold text-slate-300 px-5 py-3 hover:text-brand transition-colors duration-300"
          >
            See how it works →
          </a>
        </div>
      </div>

      <div
        className="order-first md:order-none animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative group">
          <img
            className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            alt="Artisan working - QuickFix service"
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
