export default function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-6xl mx-auto px-4 mt-20 pt-6 border-t border-slate-700/50 text-left text-slate-400 animate-fade-in"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="hover:text-slate-300 transition-colors duration-300">
          © {new Date().getFullYear()} QuickFix. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm">
          <a className="hover:text-brand" href="/privacy.html">
            Privacy
          </a>
          <a className="hover:text-brand" href="/terms.html">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
