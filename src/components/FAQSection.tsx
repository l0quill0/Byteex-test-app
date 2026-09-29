import { useState } from 'react';
import { useFAQData, fallbackFAQs } from '../hooks/useFAQData';
import { FAQItem } from './FAQItem';
import { FAQCollage } from './FAQCollage';
import { Button } from './base/Button';

export const FAQSection = () => {
  const { data } = useFAQData();

  const headline = data?.headline || 'Frequently asked questions.';
  const faqs = data?.faqs?.length ? data.faqs : fallbackFAQs;
  const buttonText = data?.buttonText || 'Customize Your Outfit';
  const reviewText = data?.reviewText || 'One of 500+ 5 Star Reviews Online';

  // Item 1 (index 0) is open by default per Figma spec (#1:1280 / #1:1791)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white pt-14 lg:pt-20 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1465px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[102px]">
        {/* Mobile Centered Headline (Figma #1:1764) */}
        <h2 className="block lg:hidden font-sofia font-normal text-[26px] leading-[30px] tracking-[0.04em] text-[#01005B] text-center mb-7">
          frequently asked questions.
        </h2>

        {/* Responsive Content Container: 2-column on Desktop, single column on Mobile */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 xl:gap-20">
          {/* Left Column: Headline (Desktop) + Accordion List */}
          <div className="w-full max-w-[349px] sm:max-w-[500px] lg:max-w-[631px] mx-auto lg:mx-0 flex-1 flex flex-col">
            {/* Desktop Headline (Figma #1:1301) */}
            <h2 className="hidden lg:block font-sofia font-normal text-[32px] leading-[40px] tracking-[0.04em] text-[#01005B] mb-8 xl:mb-10 text-left">
              {headline}
            </h2>

            {/* Accordion List (6 questions matching Figma #1:1280 - #1:1300) */}
            <div className="w-full flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Multi-layer Image Collage (Desktop only, Figma #1:1328) */}
          <div className="hidden lg:flex shrink-0 items-start justify-center pt-2">
            <FAQCollage
              mainImage={data?.mainImage}
              secondaryTop={data?.secondaryImageTop}
              secondaryBottom={data?.secondaryImageBottom}
            />
          </div>
        </div>

        {/* Mobile-Only CTA Button & Rating (Figma #2:1026, y: 6178) */}
        <div className="flex lg:hidden flex-col items-center mt-10 sm:mt-12 w-full">
          <Button variant="primary" className="w-full max-w-[381px] h-[56px]">
            {buttonText}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-3.5">
            <img
              src="/figma-assets/stars.svg"
              alt="5 Stars"
              className="w-[80px] h-[13px] object-contain"
            />
            <span className="font-suisse font-['Suisse_Intl',sans-serif] text-[12px] leading-[20px] text-[#676869] tracking-[0.02em]">
              {reviewText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
