import { Skeleton } from '../base';

export const FAQSkeleton = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 lg:py-20 overflow-hidden select-none">
      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 lg:gap-16 items-start">
          
          {/* Left Column: FAQ Accordion Placeholders */}
          <div className="w-full flex flex-col justify-start">
            {/* Headline */}
            <div className="flex justify-center lg:justify-start mb-8 lg:mb-12">
              <Skeleton className="h-8 lg:h-10 w-72 sm:w-96 rounded" />
            </div>

            {/* 6 FAQ Accordion Row Placeholders */}
            <div className="w-full flex flex-col">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-full border-b border-[#EDEDED] py-5 flex items-center justify-between">
                  <Skeleton className="h-5 w-3/5 sm:w-1/2" />
                  <Skeleton className="w-6 h-6 rounded-full" />
                </div>
              ))}
            </div>

            {/* Mobile CTA Placeholder */}
            <div className="flex flex-col items-center mt-10 lg:hidden w-full">
              <Skeleton className="w-full max-w-[340px] h-[56px] rounded" />
              <div className="flex items-center justify-center gap-2 mt-3.5">
                <Skeleton className="w-20 h-4 rounded" />
                <Skeleton className="w-48 h-3.5 rounded" />
              </div>
            </div>
          </div>

          {/* Right Column: 3-Photo Collage Placeholder (Desktop only) */}
          <div className="hidden lg:flex justify-end shrink-0">
            <div className="relative w-[430px] h-[645px]">
              {/* Main center portrait card */}
              <div className="absolute left-[39px] top-[140px] w-[276px] h-[410px] border-[2.5px] border-white overflow-hidden shadow-sm">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Top-right card */}
              <div className="absolute left-[221px] top-[1px] w-[167px] h-[253px] border-[2.5px] border-white overflow-hidden shadow-sm">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Bottom-left card */}
              <div className="absolute left-[1px] top-[379px] w-[172px] h-[256px] border-[2.5px] border-white overflow-hidden shadow-sm">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
