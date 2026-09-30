import { Skeleton } from '../base';

export const BestSelfSkeleton = () => {
  return (
    <section className="w-full bg-[#F0EEEF] py-14 lg:py-24 overflow-hidden select-none">
      <div className="max-w-[1465px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[102px]">
        {/* Mobile: Centered headline placeholder */}
        <div className="flex lg:hidden justify-center mb-8">
          <Skeleton className="h-8 sm:h-9 w-60 rounded" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
          {/* Left Column: Overlapping Image Collage Placeholder */}
          <div className="w-full lg:w-auto flex justify-center shrink-0">
            <div className="relative w-[345px] h-[363px] lg:w-[531px] lg:h-[625px] shrink-0 mx-auto">
              {/* Top-Left Accent Card */}
              <div className="absolute left-0 top-0 w-[102px] h-[108px] lg:w-[165px] lg:h-[175px] z-20 border-[4px] border-[#F0EEEF] overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Main Center Portrait Card */}
              <div className="absolute left-[53px] top-[25px] w-[238px] h-[310px] lg:left-[77px] lg:top-[47px] lg:w-[382px] lg:h-[570px] z-10 overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Bottom-Right Accent Card */}
              <div className="absolute left-[235px] top-[251px] w-[110px] h-[112px] lg:left-[395px] lg:top-[489px] lg:w-[129px] lg:h-[175px] z-20 border-[4px] border-[#F0EEEF] overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story Content Placeholder */}
          <div className="w-full max-w-[620px] mx-auto lg:mx-0 flex flex-col justify-center">
            {/* Desktop Headline */}
            <Skeleton className="hidden lg:block h-10 w-72 mb-6 rounded" />

            {/* Story Paragraph Placeholders */}
            <div className="space-y-3.5 mb-8">
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            {/* CTA Button Placeholder (Desktop only) */}
            <div className="hidden lg:flex justify-start">
              <Skeleton className="w-[362px] h-[56px] rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
