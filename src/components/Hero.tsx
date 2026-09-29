import { useHeroData } from '../hooks/useHeroData';
import { Wrapper } from './base/Wrapper';
import { urlFor } from '../lib/sanity';
import { HeroCardFan } from './HeroCardFan';
import { HeroReviewCard } from './HeroReviewCard';
import { Button } from './base/Button';
import { AsSeenInCarousel } from './AsSeenInCarousel';

export const Hero = () => {
  const { data, isLoading, error } = useHeroData();

  const fallbackText = "Don't apologize for being comfortable.";
  const heroText = data?.hero?.headline || fallbackText;
  
  const defaultFeatures: { description: string; icon?: any }[] = [
    { description: "Beautiful, comfortable loungewear for day or night." },
    { description: "No wasteful extras, like tags or plastic packaging." },
    { description: "Our signature fabric is incredibly comfortable — unlike anything you've ever felt." }
  ];
  
  const features = data?.features?.length ? data.features : defaultFeatures;

  if (error) {
    console.error("Failed to load hero data:", error);
  }

  return (
    <section className="w-full relative overflow-hidden pb-12 lg:pb-24 pt-8 lg:pt-16 bg-white">
      <Wrapper className="relative z-20 pl-4 md:pl-24 lg:pl-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-[592px_1fr] gap-x-8 lg:gap-x-16 max-w-[1464px]">
          
          <div className="order-1 lg:col-start-1 lg:row-start-1 text-left">
            {isLoading ? (
              <div className="animate-pulse h-24 bg-gray-300 rounded w-full mb-8"></div>
            ) : (
              <h1 className="font-sofia text-[38px] leading-[45px] font-normal text-[#01005B] tracking-[0.04em] mb-8 lg:mb-10">
                {heroText}
              </h1>
            )}
          </div>

          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-4 w-full mb-8 lg:mb-0">
            <HeroCardFan images={data?.hero?.productImages || []} />
          </div>

          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-6 mb-8 lg:mb-10 w-full max-w-sm lg:max-w-none">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 text-left">
                {feature.icon ? (
                  <img src={urlFor(feature.icon).url()} alt="" className="w-[31px] h-[31px] shrink-0 object-contain" />
                ) : (
                  <span className="w-2 h-2 mt-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                )}
                <span className="font-sofia text-[15px] leading-[23px] text-[#676869] tracking-[0.03em]">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>

          <div className="order-4 lg:col-start-1 lg:row-start-3 w-full mb-8 lg:mb-12">
            <Button className="w-full max-w-sm sm:w-[362px] h-[56px]">
              Customize Your Outfit
            </Button>
          </div>

          <div className="order-5 lg:col-start-1 lg:row-start-4 w-full flex lg:block justify-center relative z-30">
            <HeroReviewCard />
          </div>

        </div>
      </Wrapper>

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
