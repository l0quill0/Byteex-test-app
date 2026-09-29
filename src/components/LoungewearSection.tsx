import { Button } from './base/Button';
import { ProductCarousel } from './ProductCarousel';

const pillars = [
  {
    icon: '/figma-assets/feature-icon-2.svg',
    title: 'Ethically sourced.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    icon: '/figma-assets/feature-pillar-3.svg',
    title: 'Responsibly made.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    icon: '/figma-assets/feature-pillar-2.svg',
    title: 'Made for living in.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    icon: '/figma-assets/feature-pillar-4.svg',
    title: 'Unimaginably comfortable.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

export const LoungewearSection = () => {
  return (
    <section className="w-full bg-white pt-2 sm:pt-4 lg:pt-6 pb-12 lg:pb-20">
      <div className="max-w-[1464px] mx-auto px-4 md:px-8 lg:px-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] lg:gap-16 items-start">
          
          {/* Section Headline */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h2 className="font-sofia font-['Sofia_Pro',sans-serif] text-[26px] leading-[34px] lg:text-[32px] lg:leading-[40px] tracking-[0.04em] text-[#01005B] text-center lg:text-left mb-6 lg:mb-12">
              Loungewear you can be proud of.
            </h2>
          </div>

          {/* Interactive Carousel */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
            <ProductCarousel />
          </div>

          {/* 4 Feature Pillars */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-0 lg:gap-10 w-full max-w-[560px] mx-auto lg:mx-0">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="w-full">
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 lg:gap-6">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-[42px] h-[42px] shrink-0 object-contain"
                  />
                  <div className="flex flex-col items-center lg:items-start">
                    <h3 className="font-sofia font-['Sofia_Pro',sans-serif] text-[20px] lg:text-[22px] leading-[24px] text-[#01005B] tracking-[0.04em] mt-3 lg:mt-0">
                      {pillar.title}
                    </h3>
                    <p className="font-sofia font-['Sofia_Pro',sans-serif] text-[14px] leading-[20px] lg:leading-[22px] text-[#484848] tracking-[0.03em] mt-2 lg:mt-1 max-w-[280px] lg:max-w-none text-center lg:text-left">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {idx < pillars.length - 1 && (
                  <div className="w-[334px] max-w-full h-[1px] bg-[#C4C4C4]/50 my-6 mx-auto lg:hidden" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA Button & Rating */}
          <div className="order-4 lg:hidden flex flex-col items-center mt-10 w-full">
            <Button variant="primary" className="w-full max-w-[381px] h-[56px]">
              Customize Your Outfit
            </Button>
            <div className="flex items-center justify-center gap-2 mt-3.5">
              <img
                src="/figma-assets/stars.svg"
                alt="5 Stars"
                className="w-[80px] h-[13px] object-contain"
              />
              <span className="font-suisse font-['Suisse_Intl',sans-serif] text-[12px] leading-[20px] text-[#676869] tracking-[0.02em]">
                Over 500+ 5 Star Reviews Online
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
