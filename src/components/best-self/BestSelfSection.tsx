import { useBestSelfData, fallbackParagraphs } from '../../hooks';
import { BestSelfCollage } from './BestSelfCollage';
import { Button } from '../base';

export const BestSelfSection = () => {
  const { data } = useBestSelfData();

  const headline = data?.headline || 'Be your best self.';
  const paragraphs = data?.paragraphs?.length ? data.paragraphs : fallbackParagraphs;
  const buttonText = data?.buttonText || 'Customize Your Outfit';

  return (
    <section className="w-full bg-[#F0EEEF] py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1465px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[102px]">
        {/* Mobile: Centered headline on top (Figma #1:1706) */}
        <h2 className="block lg:hidden font-sofia font-normal text-[30px] sm:text-[34px] leading-[38px] text-[#2A2996] tracking-[0.04em] mb-8 text-center">
          {headline}
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
          {/* Left Column: Overlapping Image Collage (Figma #1:1388 Desktop / #2:903 Mobile) */}
          <div className="w-full lg:w-auto flex justify-center shrink-0">
            <BestSelfCollage
              mainImage={data?.mainImage}
              secondaryTop={data?.secondaryImageTop}
              secondaryBottom={data?.secondaryImageBottom}
            />
          </div>

          {/* Right Column: Content area (Figma #1:1370, #1:1371, #2:843) */}
          <div className="w-full max-w-[620px] mx-auto lg:mx-0 flex flex-col justify-center">
            {/* Desktop Headline */}
            <h2 className="hidden lg:block font-sofia font-normal text-[32px] lg:text-[38px] leading-[40px] lg:leading-[45px] text-[#2A2996] tracking-[0.04em] mb-6 text-left">
              {headline}
            </h2>

            {/* Founder Story Copy */}
            <div className="font-sofia font-normal text-[15px] leading-[23px] text-[#6C6C6C] tracking-[0.03em] space-y-4 mb-8 text-left">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* CTA Button (Desktop only matching Figma #2:843; hidden on mobile) */}
            <div className="hidden lg:flex justify-start">
              <Button className="w-full sm:w-[362px] h-[56px]">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
