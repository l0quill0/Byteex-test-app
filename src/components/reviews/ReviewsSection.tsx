import { useReviewsData, fallbackReviews } from '../../hooks';
import { UGCPhotoGrid } from '../best-self';
import { ReviewsCarousel } from './ReviewsCarousel';
import { Button } from '../base';

export const ReviewsSection = () => {
  const { data } = useReviewsData();

  const headline = data?.headline || 'What are our fans saying?';
  const subtitle =
    data?.subtitle ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.';
  const reviews = data?.reviews?.length ? data.reviews : fallbackReviews;
  const buttonText = data?.buttonText || 'Customize Your Outfit';
  const reviewText = data?.reviewText || 'Over 500+ 5 Star Reviews Online';

  return (
    <section className="w-full bg-white pt-7 lg:pt-9 pb-14 lg:pb-20 overflow-hidden">
      {/* 1. Header Area (Padded & Centered) */}
      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[102px] flex flex-col items-center">
        {/* Section Headline (Figma #1:1227 Desktop / #1:1762 Mobile) */}
        <h2 className="font-sofia font-normal text-[26px] lg:text-[32px] leading-[36px] lg:leading-[40px] tracking-[0.04em] text-[#01005B] text-center mb-2.5 lg:mb-3">
          {headline}
        </h2>

        {/* Section Subtitle (Figma #1:1536 Desktop / #1:1763 Mobile) */}
        <p className="font-sofia font-normal text-[15px] leading-[23px] text-[#676869] tracking-[0.03em] max-w-[613px] text-center mb-6 lg:mb-10">
          {subtitle}
        </p>
      </div>

      {/* 2. Full-Width UGC Photo Gallery Strip (Figma #1:1304 Desktop / #1:1716 Mobile) */}
      <div className="w-full mb-8 lg:mb-12">
        <UGCPhotoGrid image={data?.fansGroupImage} />
      </div>

      {/* 3. Interactive Reviews Carousel & CTA */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 flex flex-col items-center">
        <div className="w-full mb-14 lg:mb-12">
          <ReviewsCarousel reviews={reviews} />
        </div>

        {/* Primary CTA Button & Rating (Figma #1:1515 Desktop / #2:1004 Mobile) */}
        <div className="w-full flex flex-col items-center">
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
