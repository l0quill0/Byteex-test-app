import { urlFor } from '../../lib/sanity';
import {
  useFinalCtaData,
  fallbackCardImages,
} from '../../hooks';

export const FinalCTASection = () => {
  const { data } = useFinalCtaData();

  const title = data?.title || 'Find something you love.';
  const desktopSubtitle =
    data?.desktopSubtitle ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.';
  const mobileSubtitle =
    data?.mobileSubtitle || 'Click below to browse our collection!';
  const buttonText = data?.buttonText || 'Customize Your Outfit';
  const shipsInText = data?.shipsInText || 'Ships in 1-2 Days';
  const freeShippingText =
    data?.freeShippingText || 'FREE Shipping on Orders over $200';
  const reviewsText =
    data?.reviewsText || 'Over 500+ 5 Star Reviews Online';
  const ethicallyMadeText =
    data?.ethicallyMadeText || 'Made ethically and responsibly.';

  const resolveCardImage = (index: number) => {
    const card = data?.productCards?.[index];
    if (card?.asset) {
      try {
        const url = urlFor(card.asset).url();
        if (url) return url;
      } catch {
        return fallbackCardImages[index] || fallbackCardImages[0];
      }
    }
    return fallbackCardImages[index] || fallbackCardImages[0];
  };

  return (
    <section
      className="w-full pt-14 lg:pt-20 pb-16 lg:pb-24 overflow-hidden relative"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 20%, rgba(249, 240, 229, 0.2) 55%, rgba(249, 240, 229, 0.55) 100%)',
      }}
    >

      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Headline (Figma #1:1167 / #1:1765) */}
        <h2 className="font-sofia font-normal text-[26px] lg:text-[36px] leading-[34px] lg:leading-[44px] tracking-[0.02em] text-[#01005B] text-center mb-3">
          {title}
        </h2>

        {/* Responsive Subtitle (Figma #1:1285 Desktop vs #1:1790 Mobile) */}
        <p className="hidden md:block font-sofia font-normal text-[15px] leading-[22px] tracking-[0.03em] text-[#676869] text-center max-w-[587px] mb-12">
          {desktopSubtitle}
        </p>
        <p className="block md:hidden font-sofia font-normal text-[15px] leading-[22px] tracking-[0.03em] text-[#676869] text-center max-w-[340px] mb-8">
          {mobileSubtitle}
        </p>

        {/* Desktop 3-Card Showcase (Figma #2:763, 815px × 373px) */}
        <div className="hidden md:flex items-center justify-center max-w-[850px] mx-auto relative mb-12">
          {/* Left Card (#2:779) */}
          <div className="relative shrink-0">
            {/* Warm beige accent square (#2:778) */}
            <div
              className="w-[139px] h-[196px] absolute -left-[69px] top-[60px] -z-0 rounded-[2px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="w-[209px] h-[317px] relative z-10 overflow-hidden shadow-sm rounded-[2px] bg-[#F0EEEF]">
              <img
                src={resolveCardImage(0)}
                alt="Product Showcase Left"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Card (#2:764, Elevated & Taller) */}
          <div className="w-[246px] h-[373px] mx-5 relative z-20 overflow-hidden shadow-md rounded-[2px] bg-[#F0EEEF] shrink-0">
            <img
              src={resolveCardImage(1)}
              alt="Product Showcase Center"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card (#2:771) */}
          <div className="relative shrink-0">
            {/* Warm beige accent square (#2:770) */}
            <div
              className="w-[139px] h-[196px] absolute -right-[69px] top-[60px] -z-0 rounded-[2px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="w-[209px] h-[317px] relative z-10 overflow-hidden shadow-sm rounded-[2px] bg-[#F0EEEF]">
              <img
                src={resolveCardImage(2)}
                alt="Product Showcase Right"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile 3-Card Showcase Collage (Figma #1:1766) */}
        <div className="flex md:hidden items-center justify-center w-full max-w-[360px] mx-auto relative mb-10">
          {/* Left Mobile Card */}
          <div className="relative shrink-0">
            <div
              className="w-[67px] h-[95px] absolute -left-[28px] top-[26px] -z-0 rounded-[2px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="w-[97px] h-[147px] relative z-10 overflow-hidden shadow-sm rounded-[2px] bg-[#F0EEEF]">
              <img
                src={resolveCardImage(0)}
                alt="Product Showcase Left"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Mobile Card (Elevated & Larger) */}
          <div className="w-[139px] h-[211px] mx-2 relative z-20 overflow-hidden shadow-md rounded-[2px] bg-[#F0EEEF] shrink-0">
            <img
              src={resolveCardImage(1)}
              alt="Product Showcase Center"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Mobile Card */}
          <div className="relative shrink-0">
            <div
              className="w-[67px] h-[95px] absolute -right-[28px] top-[26px] -z-0 rounded-[2px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.22) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="w-[97px] h-[147px] relative z-10 overflow-hidden shadow-sm rounded-[2px] bg-[#F0EEEF]">
              <img
                src={resolveCardImage(2)}
                alt="Product Showcase Right"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Primary CTA Button (Figma #1:1538 / #2:1049) */}
        <div className="w-full max-w-[374px] mb-4">
          <button
            type="button"
            className="w-full h-[56px] bg-[#01005B] hover:bg-[#15005B] active:scale-[0.99] text-white rounded font-sofia font-medium text-[16px] leading-[20px] flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
          >
            <span>{buttonText}</span>
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Mobile 5 Stars & Reviews (Figma #2:1049) */}
        <div className="flex md:hidden flex-col items-center justify-center mb-6">
          <img
            src="/figma-assets/stars.svg"
            alt="5 Stars"
            className="w-[80px] h-[13px] object-contain mb-1.5"
          />
          <span className="font-sofia font-normal text-[11px] leading-[17px] text-[#59913F] tracking-[0.02em]">
            {reviewsText}
          </span>
        </div>

        {/* Desktop Payment & Shipping Trust Row (Figma #2:654, 364px × 22px) */}
        <div className="hidden md:flex items-center justify-center gap-3.5 text-center mb-10">
          <div className="flex items-center gap-1.5 shrink-0">
            <img
              src="/figma-assets/green-clock.svg"
              alt=""
              className="w-[11px] h-[11px] shrink-0"
              aria-hidden="true"
            />
            <span className="font-suisse font-normal text-[11px] leading-[17px] tracking-[0.04em] text-[#1FAD40]">
              {shipsInText}
            </span>
          </div>

          <div className="w-[1px] h-4 bg-[#C4C4C4]/40 shrink-0" aria-hidden="true" />

          {/* Payment Badges (Figma #2:652, 243px × 22px) */}
          <img
            src="/figma-assets/payment-methods.png"
            alt="Payment methods"
            className="w-[243px] h-[22px] object-contain shrink-0"
          />
        </div>

        {/* Desktop 3 Trust Badges (Figma #1:1544, 858px × 139px) */}
        <div className="hidden md:flex items-center justify-between max-w-[858px] w-full pt-8 border-t border-[#EAEAEA]/80">
          {/* Badge 1: Free Shipping (#1:1550) */}
          <div className="flex-1 flex items-center justify-center gap-3 px-2">
            <div className="w-[33px] h-[33px] rounded-full bg-[#666666]/10 flex items-center justify-center shrink-0">
              <img
                src="/figma-assets/shipping.svg"
                alt=""
                className="w-[20px] h-[12px] object-contain"
                aria-hidden="true"
              />
            </div>
            <span className="font-sofia font-normal text-[13px] leading-[18px] text-[#484848] max-w-[160px]">
              {freeShippingText}
            </span>
          </div>

          {/* Divider (#1:1572) */}
          <div
            className="w-[1px] h-[51px] bg-[#C4C4C4]/40 shrink-0"
            aria-hidden="true"
          />

          {/* Badge 2: 500+ Reviews (#1:1564) */}
          <div className="flex-1 flex items-center justify-center gap-3 px-2">
            <div className="w-[33px] h-[33px] rounded-full bg-[#666666]/10 flex items-center justify-center shrink-0">
              <img
                src="/figma-assets/shield.svg"
                alt=""
                className="w-[17px] h-[18px] object-contain"
                aria-hidden="true"
              />
            </div>
            <span className="font-sofia font-normal text-[13px] leading-[18px] text-[#484848] max-w-[170px]">
              {reviewsText}
            </span>
          </div>

          {/* Divider (#1:1573) */}
          <div
            className="w-[1px] h-[51px] bg-[#C4C4C4]/40 shrink-0"
            aria-hidden="true"
          />

          {/* Badge 3: Ethically Made (#1:1569) */}
          <div className="flex-1 flex items-center justify-center gap-3 px-2">
            <div className="w-[33px] h-[33px] rounded-full bg-[#666666]/10 flex items-center justify-center shrink-0">
              <img
                src="/figma-assets/cart.svg"
                alt=""
                className="w-[18px] h-[16px] object-contain"
                aria-hidden="true"
              />
            </div>
            <span className="font-sofia font-normal text-[13px] leading-[18px] text-[#484848] max-w-[170px]">
              {ethicallyMadeText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
