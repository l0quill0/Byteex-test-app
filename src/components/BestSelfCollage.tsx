import { urlFor } from '../lib/sanity';

interface BestSelfCollageProps {
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

export const BestSelfCollage = ({
  mainImage,
  secondaryTop,
  secondaryBottom,
}: BestSelfCollageProps) => {
  const mainSrc = resolveImg(mainImage, '/figma-assets/white-robe-main.png');
  const topSrc = resolveImg(secondaryTop, '/figma-assets/product-slide-1.png');
  const bottomSrc = resolveImg(secondaryBottom, '/figma-assets/product-slide-8.png');

  return (
    <div className="relative w-[345px] h-[363px] lg:w-[531px] lg:h-[625px] shrink-0 select-none mx-auto">
      {/* Top-Left Small Accent Card (Figma #1:1401 Desktop / #2:910 Mobile) */}
      <div className="absolute left-0 top-0 w-[102px] h-[108px] lg:w-[165px] lg:h-[175px] z-20 border-[4px] border-[#F0EEEF] shadow-md overflow-hidden rounded-none">
        <img
          src={topSrc}
          alt="Loungewear lifestyle"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Center Portrait Card (Figma #1:1398 Desktop / #2:908 Mobile) */}
      <div className="absolute left-[53px] top-[25px] w-[238px] h-[310px] lg:left-[77px] lg:top-[47px] lg:w-[382px] lg:h-[570px] z-10 shadow-xl overflow-hidden rounded-none">
        <img
          src={mainSrc}
          alt="Be your best self founder showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom-Right Small Accent Card (Figma #1:1406 Desktop / #2:915 Mobile) */}
      <div className="absolute left-[235px] top-[251px] w-[110px] h-[112px] lg:left-[395px] lg:top-[489px] lg:w-[129px] lg:h-[175px] z-20 border-[4px] border-[#F0EEEF] shadow-md overflow-hidden rounded-none">
        <img
          src={bottomSrc}
          alt="Loungewear comfort"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
