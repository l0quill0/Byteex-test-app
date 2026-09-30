import { useState, useRef } from 'react';
import { type LoungewearSlide, fallbackSlides } from '../../hooks';
import { urlFor } from '../../lib/sanity';

interface ProductCarouselProps {
  slides?: LoungewearSlide[];
}

export const ProductCarousel = ({ slides }: ProductCarouselProps) => {
  const activeSlides = slides && slides.length > 0 ? slides : fallbackSlides;
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const touchStartX = useRef(0);

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? activeSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      prevSlide();
    } else if (deltaX < -40) {
      nextSlide();
    }
  };

  const getSlideSrc = (slide: LoungewearSlide) => {
    if (slide.image) {
      try {
        return urlFor(slide.image).url();
      } catch {
        return slide.src || '';
      }
    }
    return slide.src || '';
  };

  const currentSlide = activeSlides[activeSlideIndex] || activeSlides[0];

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Main Image with Flanking Navigation Chevrons */}
      <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[507px]">
        {/* Left Chevron */}
        <button
          onClick={prevSlide}
          aria-label="Previous image"
          className="absolute left-0 sm:-left-2 lg:-left-6 top-1/2 -translate-y-1/2 p-2 focus:outline-none z-10 cursor-pointer hover:opacity-75 transition-opacity"
        >
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="w-[10px] h-[18px] lg:w-[12px] lg:h-[24px]">
            <path d="M11 22.5L1 12L11 1.5" stroke="#676869" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Product Image Showcase with Overlaid Previews */}
        <div
          className="relative w-[280px] h-[418px] sm:w-[303px] sm:h-[453px] lg:w-[433px] lg:h-[648px] overflow-hidden rounded-none bg-[#F9F0E5]/10 shadow-[0px_4px_20px_rgba(0,0,0,0.06)]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={getSlideSrc(currentSlide)}
            alt={currentSlide.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-none transition-opacity duration-300"
          />

          {/* 8 Previews Row Overlaid on Bottom of Image */}
          <div className="absolute bottom-2.5 sm:bottom-3 lg:bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 lg:gap-2">
            {activeSlides.map((slide, idx) => {
              const isActive = activeSlideIndex === idx;
              return (
                <button
                  key={slide.id || idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  aria-label={`View slide ${idx + 1}`}
                  className={`w-[22px] h-[23px] lg:w-[31px] lg:h-[32px] rounded-none overflow-hidden transition-all cursor-pointer ${
                    isActive
                      ? 'border-2 border-white shadow-md scale-105 z-10'
                      : 'border border-white/60 hover:border-white opacity-85 hover:opacity-100'
                  }`}
                >
                  <img
                    src={getSlideSrc(slide)}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover rounded-none"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Chevron */}
        <button
          onClick={nextSlide}
          aria-label="Next image"
          className="absolute right-0 sm:-right-2 lg:-right-6 top-1/2 -translate-y-1/2 p-2 focus:outline-none z-10 cursor-pointer hover:opacity-75 transition-opacity"
        >
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="w-[10px] h-[18px] lg:w-[12px] lg:h-[24px]">
            <path d="M1 22.5L11 12L1 1.5" stroke="#676869" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dynamic Product Caption */}
      <p data-testid="product-caption" className="mt-2.5 lg:mt-3 text-center font-suisse font-['Suisse_Intl',sans-serif] text-[13px] leading-[22px] tracking-[0.03em] text-[#484848]">
        {currentSlide.name}
      </p>
    </div>
  );
};
