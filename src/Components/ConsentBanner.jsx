import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("qf_consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("qf_consent", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="max-w-6xl mx-auto m-4 p-4 rounded-xl border border-slate-700/50 bg-slate-900/90 backdrop-blur-sm text-slate-300 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-sm">
            We use cookies for analytics to improve QuickFix. By using this
            site, you agree to our
            <a
              className="text-brand hover:text-brand-dark ml-1"
              href="/privacy.html"
            >
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              I agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
