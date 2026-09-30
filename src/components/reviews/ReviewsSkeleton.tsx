import { Skeleton } from '../base';

export const ReviewsSkeleton = () => {
  return (
    <section className="w-full bg-white pt-7 lg:pt-9 pb-14 lg:pb-20 overflow-hidden select-none">
      {/* 1. Header Area Placeholder */}
      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[102px] flex flex-col items-center">
        <Skeleton className="h-8 lg:h-10 w-64 sm:w-80 mb-3 rounded" />
        <Skeleton className="h-4 w-full max-w-[540px] mb-6 lg:mb-10" />
      </div>

      {/* 2. Full-Width UGC Photo Gallery Strip Placeholder */}
      <div className="w-full mb-8 lg:mb-12">
        <Skeleton className="w-full h-[140px] sm:h-[180px] lg:h-[220px] rounded-none" />
      </div>

      {/* 3. Review Cards Row Placeholder */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 flex flex-col items-center">
        <div className="w-full mb-14 lg:mb-12 flex justify-center gap-6 overflow-hidden">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] lg:w-[410px] h-[220px] bg-white border border-[#EDEDED] rounded-[8px] p-6 flex flex-col justify-between shrink-0"
            >
              <div>
                <Skeleton className="w-24 h-4 mb-4" />
                <Skeleton className="h-3.5 w-full mb-2" />
                <Skeleton className="h-3.5 w-full mb-2" />
                <Skeleton className="h-3.5 w-2/3" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button & Rating Placeholder */}
        <div className="w-full flex flex-col items-center">
          <Skeleton className="w-full max-w-[381px] h-[56px] rounded" />
          <div className="flex items-center justify-center gap-2 mt-3.5">
            <Skeleton className="w-20 h-4 rounded" />
            <Skeleton className="w-48 h-3.5 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};
