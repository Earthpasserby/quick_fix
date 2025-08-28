import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import NearbyDemo from "./NearbyDemo.jsx";
import HowItWorks from "./HowItWorks.jsx";
import CTA from "./CTA.jsx";
import WaitlistForm from "./WaitlistForm.jsx";
import Footer from "./Footer.jsx";
import ConsentBanner from "./ConsentBanner.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NearbyDemo />
        <HowItWorks />
        <section className="max-w-6xl mx-auto px-4 my-20">
          <div className="rounded-2xl border border-slate-700/50 p-6 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-brand/50 transition-all duration-500 hover:scale-[1.02] animate-slide-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Join the QuickFix waitlist
                </h2>
                <p className="text-slate-300 mt-2">
                  Get notified when we launch in your city.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  );
}
