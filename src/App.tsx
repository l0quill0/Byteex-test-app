import {
  AnnouncementBar,
  Navbar,
  Hero,
  LoungewearSection,
  BestSelfSection,
  ComfortMadeEasySection,
  ReviewsSection,
  FAQSection,
  GreenImpactSection,
  FinalCTASection,
} from './components';

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
        <GreenImpactSection />
        <FinalCTASection />
      </main>
    </div>
  );
}

export default App;
