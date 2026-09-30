import { useState, useEffect, useRef } from 'react';

const partners = [
  { name: 'Eco-Stylist', src: '/figma-assets/partner-eco-stylist.png', height: 'h-3 sm:h-3.5' },
  { name: 'Canadian Living', src: '/figma-assets/partner-canadian-living.png', height: 'h-5 sm:h-6' },
  { name: 'Jillian Harris', src: '/figma-assets/partner-jillian-harris.png', height: 'h-4 sm:h-5' },
  { name: 'The Eco Hub', src: '/figma-assets/partner-the-eco-hub.png', height: 'h-4 sm:h-4.5' },
  { name: 'Trendhunter', src: '/figma-assets/partner-trendhunter.png', height: 'h-4.5 sm:h-5' },
];

export const AsSeenInCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const touchStartX = useRef(0);

  const slides = [
    [partners[3], partners[4], partners[0]],
    [partners[0], partners[1], partners[2]],
    [partners[2], partners[3], partners[4]],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else if (deltaX < -40) {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="hidden md:flex justify-center items-center w-full max-w-[1253px] px-4">
        <img src="/figma-assets/as-seen-strip.svg" alt="As seen in partners" className="w-full h-auto object-contain" />
      </div>

      <div 
        className="flex md:hidden flex-col items-center w-full max-w-[394px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              width: `${slides.length * 100}%`,
              transform: `translateX(-${activeSlide * (100 / slides.length)}%)` 
            }}
          >
            {slides.map((slide, slideIdx) => (
              <div 
                key={slideIdx} 
                style={{ width: `${100 / slides.length}%` }}
                className="flex-shrink-0 flex items-center justify-around gap-2 px-2"
              >
                {slide.map((p, idx) => (
                  <div key={idx} className="flex-1 flex justify-center items-center">
                    <img src={p.src} alt={p.name} className={`${p.height} w-auto object-contain`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pagination dots matching Figma #1:1647, #1:1670, #1:1671 */}
        <div className="flex items-center gap-[7px] mt-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                activeSlide === idx ? 'bg-[#01005B]' : 'bg-[#C4C4C4]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
