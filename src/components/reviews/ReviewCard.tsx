import { urlFor } from '../../lib/sanity';
import type { ReviewItem } from '../../hooks';

interface ReviewCardProps {
  review: ReviewItem;
  isActive?: boolean;
  className?: string;
}

export const ReviewCard = ({ review, isActive = true, className = '' }: ReviewCardProps) => {
  let avatarSrc = '/avatar-jane.png';
  if (review.avatar) {
    if (typeof review.avatar === 'string') {
      avatarSrc = review.avatar;
    } else if (typeof review.avatar === 'object' && review.avatar.asset) {
      try {
        avatarSrc = urlFor(review.avatar).url() || avatarSrc;
      } catch {
        // fallback
      }
    }
  }

  return (
    <div
      className={`w-full max-w-[299px] lg:max-w-[270px] xl:max-w-[338px] bg-white border border-[#EAEAEA] rounded-[8px] p-5 sm:p-6 flex flex-col justify-start shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] transition-all duration-500 shrink-0 ${
        isActive
          ? 'h-[261px] scale-100 z-10 shadow-md ring-1 ring-[#01005B]/10 opacity-100'
          : 'h-[194px] opacity-75 shadow-sm'
      } ${className}`}
    >
      {/* Top Header: Avatar + Stars + Author */}
      <div className="flex items-center gap-3.5 mb-3.5">
        <div className="w-[39px] h-[39px] rounded-full shrink-0 overflow-hidden bg-[#1C2E58] flex items-center justify-center">
          <img
            src={avatarSrc}
            alt={review.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <img
            src="/figma-assets/stars.svg"
            alt="5 Stars"
            className="w-[60px] h-[10px] object-contain mb-1"
          />
          <span className="font-sofia font-normal text-[15px] leading-[23px] text-[#676869] tracking-[0.03em]">
            {review.author}
          </span>
        </div>
      </div>

      {/* Testimonial Quote */}
      <p
        className={`font-suisse font-normal text-[12px] sm:text-[13px] leading-[20px] text-[#676869] tracking-[0.04em] text-left transition-all duration-500 ${
          isActive ? '' : 'line-clamp-3'
        }`}
      >
        {review.quote}
      </p>
    </div>
  );
};
