export default function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-6xl mx-auto px-4 mt-20 pt-6 border-t border-slate-700/50 text-left text-slate-400 animate-fade-in"
    >
      <p className="hover:text-slate-300 transition-colors duration-300">
        © {new Date().getFullYear()} QuickFix. All rights reserved.
      </p>
    </footer>
  );
}
