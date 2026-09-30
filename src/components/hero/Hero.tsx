import { useHeroData } from '../../hooks';
import { Wrapper, Button } from '../base';
import { urlFor } from '../../lib/sanity';
import { HeroCardFan } from './HeroCardFan';
import { HeroReviewCard } from './HeroReviewCard';
import { AsSeenInCarousel } from './AsSeenInCarousel';

export const Hero = () => {
  const { data, isLoading, error } = useHeroData();

  const fallbackText = "Don't apologize for being comfortable.";
  const heroText = data?.hero?.headline || fallbackText;
  
  const defaultFeatures: { description: string; icon?: any; fallbackIcon: string }[] = [
    { description: "Beautiful, comfortable loungewear for day or night.", fallbackIcon: "/figma-assets/feature-icon-1.svg" },
    { description: "No wasteful extras, like tags or plastic packaging.", fallbackIcon: "/figma-assets/feature-icon-2.svg" },
    { description: "Our signature fabric is incredibly comfortable — unlike anything you've ever felt.", fallbackIcon: "/figma-assets/feature-icon-3.svg" }
  ];
  
  const features = data?.features?.length ? data.features : defaultFeatures;

  if (error) {
    console.error("Failed to load hero data:", error);
  }

  return (
    <section className="w-full relative overflow-hidden pb-12 lg:pb-24 pt-8 lg:pt-16 bg-white">
      <div className="w-full max-w-[1465px] mx-auto px-4 md:px-12 lg:pl-[102px] lg:pr-[62px] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] xl:grid-cols-[576px_725px] justify-between items-start gap-y-8">
          
          <div className="order-1 lg:col-start-1 lg:row-start-1 text-left">
            {isLoading ? (
              <div className="animate-pulse h-24 bg-gray-300 rounded w-full mb-8"></div>
            ) : (
              <h1 className="font-sofia text-[30px] sm:text-[34px] lg:text-[38px] leading-[36px] sm:leading-[42px] lg:leading-[45px] font-normal text-[#01005B] tracking-[0.04em] mb-8 lg:mb-10 text-center lg:text-left">
                {heroText}
              </h1>
            )}
          </div>

          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-4 w-full flex justify-center lg:justify-end mb-8 lg:mb-0">
            <HeroCardFan images={data?.hero?.productImages || []} />
          </div>

          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-6 mb-8 lg:mb-10 w-full max-w-sm lg:max-w-none">
            {features.map((feature: any, idx: number) => {
              const iconSrc = feature.icon ? urlFor(feature.icon).url() : (feature.fallbackIcon || `/figma-assets/feature-icon-${(idx % 3) + 1}.svg`);
              return (
                <div key={idx} className="flex items-start gap-4 text-left">
                  {iconSrc ? (
                    <img src={iconSrc} alt="" className="w-[31px] h-[31px] shrink-0 object-contain" />
                  ) : (
                    <span className="w-2 h-2 mt-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                  )}
                  <span className="font-sofia text-[15px] leading-[23px] text-[#676869] tracking-[0.03em]">
                    {feature.description}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="order-4 lg:col-start-1 lg:row-start-3 w-full mb-8 lg:mb-12 flex justify-center lg:justify-start">
            <Button className="w-full max-w-[340px] sm:w-[362px] h-[56px]">
              Customize Your Outfit
            </Button>
          </div>

          <div className="order-5 lg:col-start-1 lg:row-start-4 w-full flex lg:block justify-center relative z-30">
            <HeroReviewCard />
          </div>

        </div>
      </div>

      <div className="w-full relative z-10 -mt-12 lg:-mt-[76px] pt-16 lg:pt-[96px] pb-12" style={{ background: 'linear-gradient(180deg, rgba(249, 240, 229, 1) 0%, rgba(249, 240, 229, 0.18) 43%, rgba(249, 240, 229, 0) 100%)' }}>
        <Wrapper className="flex flex-col items-center">
          <span className="font-sofia text-[20px] leading-[23px] text-[#868787] tracking-[0.03em] mb-8 text-center">
            as seen in
          </span>
          
          <AsSeenInCarousel />
        </Wrapper>
      </div>
    </section>
  );
};
