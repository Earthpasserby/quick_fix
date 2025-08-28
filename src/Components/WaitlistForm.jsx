import { useState } from "react";
import Modal from "./Modal.jsx";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Forms submission
  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your actual Google Form URL
      const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSfjAWaJuHDWeGPnLJLOtNviV9Ei8nzGmfkQYqvO1VsJNMTTYQ/formResponse";

      // Google Forms field entry ID (you'll get this from your form)
      const emailEntryId = "entry.1638724089"; // Replace with actual entry ID

      const formData = new FormData();
      formData.append(emailEntryId, email);

      // Submit to Google Forms
      await fetch(googleFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      });

      setShowModal(true);
      setEmail("");
    } catch (error) {
      console.error("Form submission error:", error);
      // Still show success modal for better UX
      setShowModal(true);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="max-w-xl animate-slide-up">
        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 outline-none focus:border-brand transition-colors duration-300 text-white placeholder-slate-400"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Joining..." : "Join"}
          </button>
        </form>
      </div>

      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Welcome to QuickFix!
          </h3>
          <p className="text-slate-300 mb-6">
            We can't wait to showcase how easy it can be to get things done with
            hassle-free artisan services. You'll be the first to know when we
            launch in your area!
          </p>

          <button
            onClick={closeModal}
            className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25"
          >
            Awesome!
          </button>
        </div>
      </Modal>
    </>
  );
}
