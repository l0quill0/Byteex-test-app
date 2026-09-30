import { urlFor } from '../lib/sanity';

interface HeroCardFanProps {
  images?: any[];
}

const defaultImages = [
  '/figma-assets/hero-card-left.png',
  '/figma-assets/hero-card-center.png',
  '/figma-assets/hero-card-right.png',
];

const getImageSrc = (img: any, idx: number) => {
  if (img) {
    try {
      const url = urlFor(img).url();
      if (url) return url;
    } catch {
      return defaultImages[idx];
    }
  }
  return defaultImages[idx];
};

export const HeroCardFan = ({ images = [] }: HeroCardFanProps) => {
  const safeImages = [images[0] || null, images[1] || null, images[2] || null];

  return (
    <div className="relative w-[380px] h-[222px] md:w-[725px] md:h-[423px] mx-auto shrink-0 select-none">
      {/* Left colored square backdrop (Figma #2:629 Desktop / #2:879 Mobile) */}
      <div
        className="absolute left-0 top-[62px] md:top-[119px] w-[70px] h-[99px] md:w-[134px] md:h-[189px] z-0 pointer-events-none rounded-none"
        style={{
          background: 'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Left image card (Figma #2:635 Desktop / #2:886 Mobile) */}
      <div className="absolute left-[35px] md:left-[67px] top-[28px] md:top-[54px] w-[110px] h-[166px] md:w-[209px] md:h-[317px] z-10 overflow-hidden rounded-none shadow-sm">
        <img
          src={getImageSrc(safeImages[0], 0)}
          alt="Product 1"
          className="object-cover w-full h-full rounded-none"
        />
      </div>

      {/* Center image card (Figma #2:641 Desktop / #2:892 Mobile) */}
      <div className="absolute left-[122px] md:left-[233px] top-0 w-[136px] h-[221px] md:w-[260px] md:h-[422px] z-20 border-[2px] md:border-[2.5px] border-white overflow-hidden rounded-none">
        <img
          src={getImageSrc(safeImages[1], 1)}
          alt="Product 2"
          className="object-cover w-full h-full rounded-none"
        />
      </div>

      {/* Right image card (Figma #2:630 Desktop / #2:880 Mobile) */}
      <div className="absolute left-[236px] md:left-[450px] top-[28px] md:top-[54px] w-[110px] h-[166px] md:w-[209px] md:h-[317px] z-10 overflow-hidden rounded-none shadow-sm">
        <img
          src={getImageSrc(safeImages[2], 2)}
          alt="Product 3"
          className="object-cover w-full h-full rounded-none"
        />
      </div>

      {/* Right colored square backdrop (Figma #2:628 Desktop / #2:878 Mobile) */}
      <div
        className="absolute left-[310px] md:left-[591px] top-[62px] md:top-[119px] w-[70px] h-[99px] md:w-[134px] md:h-[189px] z-0 pointer-events-none rounded-none"
        style={{
          background: 'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

