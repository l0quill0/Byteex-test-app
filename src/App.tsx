import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LoungewearSection } from "./components/LoungewearSection";
import { BestSelfSection } from "./components/BestSelfSection";
import { ComfortMadeEasySection } from "./components/ComfortMadeEasySection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FAQSection } from "./components/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LoungewearSection />
        <BestSelfSection />
        <ComfortMadeEasySection />
        <ReviewsSection />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;
