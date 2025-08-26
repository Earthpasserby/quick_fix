export default function Navbar() {
  return (
    <header className="py-4 sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="font-extrabold text-xl text-white hover:text-brand transition-colors duration-300">
          QuickFix
        </div>
        <div className="hidden sm:flex gap-4 text-sm">
          <a
            className="text-slate-300 hover:text-brand transition-colors duration-300"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-slate-300 hover:text-brand transition-colors duration-300"
            href="#how"
          >
            How it works
          </a>
          <a
            className="text-slate-300 hover:text-brand transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <a
          href="#"
          className="sm:inline-block hidden bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}
