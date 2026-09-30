import { urlFor } from '../../lib/sanity';

interface FAQCollageProps {
  mainImage?: any;
  secondaryTop?: any;
  secondaryBottom?: any;
}

const resolveImg = (img: any, fallback: string) => {
  if (img) {
    try {
      const url = urlFor(img).url();
      if (url) return url;
    } catch {
      return fallback;
    }
  }
  return fallback;
};

export const FAQCollage = ({
  mainImage,
  secondaryTop,
  secondaryBottom,
}: FAQCollageProps) => {
  // Authentic photoshoot assets matching Figma #1:1328
  const mainSrc = resolveImg(mainImage, '/figma-assets/hero-card-center.png');
  const topSrc = resolveImg(secondaryTop, '/figma-assets/product-slide-5.png');
  const bottomSrc = resolveImg(secondaryBottom, '/figma-assets/hero-card-right.png');

  return (
    <div className="relative w-[430px] h-[645px] shrink-0 select-none hidden lg:block">
      {/* 1. Top-Left Beige Gradient Accent Square (Figma #1:1331) */}
      <div
        className="absolute left-[30px] top-[67px] w-[149px] h-[187px] z-0 pointer-events-none rounded-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Bottom-Right Beige Gradient Accent Square (Figma #1:1332) */}
      <div
        className="absolute left-[238px] top-[330px] w-[134px] h-[189px] z-0 pointer-events-none rounded-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 3. Small Accent Circle (Figma #1:1330) */}
      <div
        className="absolute left-[105px] top-[553px] w-[31px] h-[31px] rounded-full bg-[#F9F0E5] z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Top-Right Floating Photo Card (Figma #1:1336 / #2:842) - Sharp corners rounded-none */}
      <div className="absolute left-[221px] top-[1px] w-[167px] h-[253px] z-10 border-[2.5px] border-white rounded-none overflow-hidden">
        <img
          src={topSrc}
          alt="Loungewear comfort"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-none"
        />
      </div>

      {/* 5. Main Center Portrait Card (Figma #1:1357 / #1:1360) - Sharp corners rounded-none, overlaps other cards */}
      <div className="absolute left-[80px] top-[129px] w-[227px] h-[355px] z-30 rounded-none overflow-hidden">
        <img
          src={mainSrc}
          alt="Loungewear lifestyle"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-none"
        />
      </div>

      {/* 6. Bottom-Left Floating Accent Photo Card (Figma #1:1341 / #2:838) - Sharp corners rounded-none, behind center card */}
      <div className="absolute left-0 top-[440px] w-[216px] h-[159px] z-10 border-[2px] border-white rounded-none overflow-hidden">
        <img
          src={bottomSrc}
          alt="Loungewear fabric"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[center_20%] rounded-none scale-[1.04] -translate-x-[4px]"
        />
      </div>
    </div>
  );
};
