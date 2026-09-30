import { useState, useRef } from 'react';
import { useComfortMadeEasyData, fallbackSteps } from '../../hooks';
import { ComfortStepCard } from './ComfortStepCard';
import { Button } from '../base';

export const ComfortMadeEasySection = () => {
  const { data } = useComfortMadeEasyData();
  const [activeStep, setActiveStep] = useState(0);
  const touchStartX = useRef(0);

  const headline = data?.headline || 'Comfort made easy';
  const steps = data?.steps?.length ? data.steps : fallbackSteps;
  const buttonText = data?.buttonText || 'Customize Your Outfit';
  const reviewText = data?.reviewText || 'Over 500+ 5 Star Reviews Online';

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      handlePrev();
    } else if (deltaX < -40) {
      handleNext();
    }
  };

  return (
    <section className="w-full bg-white pt-12 lg:pt-16 pb-8 lg:pb-10 overflow-hidden">
      <div className="max-w-[1464px] mx-auto px-4 md:px-8 lg:px-[102px] flex flex-col items-center">
        
        {/* Section Headline (Figma #1:1460 Desktop / #2:1002 Mobile) */}
        <h2 className="font-sofia font-normal text-[26px] lg:text-[32px] leading-[36px] lg:leading-[40px] tracking-[0.04em] text-[#01005B] text-center mb-10 lg:mb-14">
          {headline}
        </h2>

        {/* Desktop: 3-Card Grid (Figma #1:1458, 1120px max-w) */}
        <div className="hidden lg:grid grid-cols-3 gap-10 w-full max-w-[1120px] justify-items-center mb-14">
          {steps.map((step, idx) => (
            <ComfortStepCard key={idx} step={step} />
          ))}
        </div>

        {/* Mobile: Interactive Step Carousel (Figma #1:1708, #1:1709) */}
        <div className="flex lg:hidden flex-col items-center w-full max-w-[390px] mb-10">
          <div
            className="relative w-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Chevron Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous step"
              className="absolute left-1 z-20 p-2 text-[#676869] hover:text-[#01005B] transition-colors focus:outline-none"
            >
              <svg width="12" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 16.5L1 9L8.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Single Active Card Display */}
            <div className="w-[288px] h-[300px] shrink-0">
              <ComfortStepCard
                step={steps[activeStep]}
                className="w-full h-full max-w-[288px]"
              />
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNext}
              aria-label="Next step"
              className="absolute right-1 z-20 p-2 text-[#676869] hover:text-[#01005B] transition-colors focus:outline-none"
            >
              <svg width="12" height="20" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 16.5L9 9L1.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button & Social Proof Rating (Figma #1:1468 Desktop / #2:980 Mobile) */}
        <div className="w-full flex flex-col items-center">
          <Button variant="primary" className="w-full max-w-[381px] h-[56px]">
            {buttonText}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-3.5">
            <img
              src="/figma-assets/stars.svg"
              alt="5 Stars"
              className="w-[80px] h-[13px] object-contain"
            />
            <span className="font-suisse font-['Suisse_Intl',sans-serif] text-[12px] leading-[20px] text-[#676869] tracking-[0.02em]">
              {reviewText}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
