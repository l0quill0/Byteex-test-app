import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { ReviewCard } from './ReviewCard';
import type { ReviewItem } from '../hooks/useReviewsData';

interface ReviewsCarouselProps {
  reviews: ReviewItem[];
}

export const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  const totalReviews = reviews.length;
  // Circular buffer: 3 sets of reviews to support seamless infinite looping in either direction
  const extendedReviews = useMemo(
    () => (totalReviews > 0 ? [...reviews, ...reviews, ...reviews] : []),
    [reviews, totalReviews]
  );

  // Start in the middle set at the second card (Jane, S.)
  const [currentIndex, setCurrentIndex] = useState(totalReviews > 0 ? totalReviews + 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [step, setStep] = useState(362);
  const isAnimating = useRef(false);
  const animTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  const handlePrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    if (animTimeout.current) clearTimeout(animTimeout.current);
    animTimeout.current = setTimeout(() => {
      isAnimating.current = false;
    }, 550);
  }, []);

  const handleNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    if (animTimeout.current) clearTimeout(animTimeout.current);
    animTimeout.current = setTimeout(() => {
      isAnimating.current = false;
    }, 550);
  }, []);

  // Seamless boundary reset on transition end: jump between cloned sets without animation
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // CRITICAL: Ignore bubbling transition events from children (cards, shadows, images)
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;

    isAnimating.current = false;
    if (animTimeout.current) clearTimeout(animTimeout.current);
    if (totalReviews === 0) return;

    if (currentIndex >= totalReviews * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - totalReviews);
    } else if (currentIndex < totalReviews) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + totalReviews);
    }
  };

  // Dynamically compute step from DOM card positions so sliding is mathematically exact on any screen
  useEffect(() => {
    const updateStep = () => {
      if (desktopTrackRef.current && desktopTrackRef.current.children.length >= 2) {
        const first = desktopTrackRef.current.children[0] as HTMLElement;
        const second = desktopTrackRef.current.children[1] as HTMLElement;
        const diff = second.offsetLeft - first.offsetLeft;
        if (diff > 0) {
          setStep(diff);
          return;
        }
      }
      setStep(window.innerWidth >= 1280 ? 362 : 286);
    };

    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, [reviews]);

  // Gentle auto-scrolling animation every 5.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered || totalReviews <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, totalReviews, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Ignore if movement was primarily vertical (user was scrolling down the page)
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    if (deltaX > 40) {
      handlePrev();
    } else if (deltaX < -40) {
      handleNext();
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Animated Sliding Viewport: exactly 3 cards visible, top-aligned, chevrons flanking */}
      <div className="hidden lg:flex items-start justify-center gap-3 xl:gap-[73px] w-full max-w-[1400px] mx-auto px-2 sm:px-4">
        {/* Desktop Left Chevron (Figma #1:1267, mt-[90px] matches y: 3793.63px) */}
        <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="shrink-0 mt-[90px] p-2 text-[#676869] hover:text-[#01005B] transition-colors focus:outline-none cursor-pointer"
        >
          <svg width="14" height="24" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 16.5L1 9L8.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Viewport for 3 cards: max-w-[842px] on lg, max-w-[1062px] on xl */}
        <div className="overflow-hidden min-h-[285px] pt-2 pb-4 max-w-[842px] xl:max-w-[1062px]">
          <div
            ref={desktopTrackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex gap-4 xl:gap-6 items-start ${
              isTransitioning ? 'transition-transform duration-500 ease-out' : ''
            }`}
            style={{
              transform: `translateX(-${(currentIndex - 1) * step}px)`,
            }}
          >
            {extendedReviews.map((rev, idx) => {
              const isCenter = idx === currentIndex;
              const isLeft = idx === currentIndex - 1;
              const isRight = idx === currentIndex + 1;
              return (
                <div
                  key={idx}
                  className={`shrink-0 ${isLeft || isRight ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  title={isLeft ? 'Previous review' : isRight ? 'Next review' : undefined}
                >
                  <ReviewCard
                    review={rev}
                    isActive={isCenter}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Right Chevron (Figma #1:1267, mt-[90px] matches y: 3793.63px) */}
        <button
          onClick={handleNext}
          aria-label="Next review"
          className="shrink-0 mt-[90px] p-2 text-[#676869] hover:text-[#01005B] transition-colors focus:outline-none cursor-pointer"
        >
          <svg width="14" height="24" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 16.5L9 9L1.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Animated Sliding Viewport with centered chevrons */}
      <div className="flex lg:hidden items-center justify-center gap-1 sm:gap-3 w-full max-w-[390px] mx-auto px-1 sm:px-2">
        {/* Mobile Left Chevron */}
        <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="shrink-0 p-2 text-[#676869] hover:text-[#01005B] transition-colors focus:outline-none cursor-pointer"
        >
          <svg width="12" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 16.5L1 9L8.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile Carousel Track */}
        <div
          className="flex-1 max-w-[299px] overflow-hidden min-h-[270px] pt-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              isTransitioning ? 'transition-transform duration-500 ease-out' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {extendedReviews.map((rev, idx) => (
              <div key={idx} className="w-full shrink-0 flex justify-center px-1">
                <ReviewCard review={rev} isActive={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Right Chevron */}
        <button
          onClick={handleNext}
          aria-label="Next review"
          className="shrink-0 p-2 text-[#676869] hover:text-[#01005B] transition-colors focus:outline-none cursor-pointer"
        >
          <svg width="12" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 16.5L9 9L1.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
