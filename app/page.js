// app/page.js
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import PrepaidCard from "./components/PrepaidCard";
import Security from "./components/Security";
import GiftCards from "./components/GiftCards";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BusinessPayments from "./components/BusinessPayments";
import DigitalGold from "./components/DigitalGold";
import Features from "./components/Features";
import UnifiedAPI from "./components/UnifiedAPI";
import JoinHub from "./components/JoinHub";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <Features />
      <PrepaidCard />
      <DigitalGold />
      <GiftCards />
      <BusinessPayments />
      <UnifiedAPI />
      <Security />
      <JoinHub />
      <Testimonials />
      <Footer />
    </div>
  );
}
