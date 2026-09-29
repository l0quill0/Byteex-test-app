import { urlFor } from '../lib/sanity';

interface HeroCardFanProps {
  images?: any[];
}

export const HeroCardFan = ({ images = [] }: HeroCardFanProps) => {
  const safeImages = [images[0] || null, images[1] || null, images[2] || null];

  return (
    <div className="flex items-start justify-center -space-x-8 md:-space-x-12 pt-2 pb-6">
      <div className="w-[110px] h-[166px] md:w-[209px] md:h-[316px] translate-y-7 md:translate-y-[54px] rounded-none z-10 shrink-0 overflow-hidden">
        {safeImages[0] ? <img src={urlFor(safeImages[0]).url()} alt="Product 1" className="object-cover w-full h-full rounded-none" /> : null}
      </div>

      <div className="w-[136px] h-[221px] md:w-[260px] md:h-[422px] translate-y-0 border-[2px] md:border-[2.5px] border-white rounded-none z-20 relative shrink-0 overflow-hidden">
        {safeImages[1] ? <img src={urlFor(safeImages[1]).url()} alt="Product 2" className="object-cover w-full h-full rounded-none" /> : null}
      </div>

      <div className="w-[110px] h-[166px] md:w-[209px] md:h-[316px] translate-y-7 md:translate-y-[54px] rounded-none z-10 shrink-0 overflow-hidden">
        {safeImages[2] ? <img src={urlFor(safeImages[2]).url()} alt="Product 3" className="object-cover w-full h-full rounded-none" /> : null}
      </div>
    </div>
  );
};
