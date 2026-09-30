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
  ErrorBoundary,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  );
}

export default App;
