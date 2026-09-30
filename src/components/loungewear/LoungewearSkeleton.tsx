import { Skeleton } from '../base';

export const LoungewearSkeleton = () => {
  return (
    <section className="w-full bg-white pt-2 sm:pt-4 lg:pt-6 pb-12 lg:pb-20 select-none">
      <div className="max-w-[1464px] mx-auto px-4 md:px-8 lg:px-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] lg:gap-16 items-start">
          
          {/* Section Headline */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 flex justify-center lg:justify-start">
            <Skeleton className="h-8 lg:h-10 w-72 sm:w-96 mb-6 lg:mb-12" />
          </div>

          {/* Interactive Carousel Placeholder (Right) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 mb-10 lg:mb-0 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[507px]">
              <Skeleton className="w-full h-[420px] sm:h-[480px] lg:h-[580px] rounded-[8px]" />
            </div>
            {/* Thumbnails indicator row */}
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="w-8 h-8 rounded" />
              ))}
            </div>
          </div>

          {/* 4 Feature Pillars (Left) */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-0 lg:gap-10 w-full max-w-[560px] mx-auto lg:mx-0">
            {[1, 2, 3, 4].map((i, idx) => (
              <div key={i} className="w-full">
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 lg:gap-6">
                  <Skeleton className="w-[42px] h-[42px] shrink-0 rounded-lg" />
                  <div className="flex flex-col items-center lg:items-start flex-1 w-full">
                    <Skeleton className="h-5 lg:h-6 w-44 mt-3 lg:mt-0 mb-2.5" />
                    <Skeleton className="h-4 w-full max-w-[320px] lg:max-w-none mb-1.5" />
                    <Skeleton className="h-4 w-3/4 max-w-[240px] lg:max-w-[400px]" />
                  </div>
                </div>

                {idx < 3 && (
                  <div className="w-[334px] max-w-full h-[1px] bg-[#C4C4C4]/50 my-6 mx-auto lg:hidden" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
