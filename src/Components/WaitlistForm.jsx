import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-xl animate-slide-up">
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 outline-none focus:border-brand transition-colors duration-300 text-white placeholder-slate-400"
        />
        <button className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25">
          Join
        </button>
      </form>
      {submitted && (
        <div className="mt-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg animate-fade-in">
          <p className="text-sm text-green-400">
            Thanks! We'll be in touch soon.
          </p>
        </div>
      )}
    </div>
  );
}
