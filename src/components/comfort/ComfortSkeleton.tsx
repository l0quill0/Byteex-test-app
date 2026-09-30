import { Skeleton } from '../base';

export const ComfortSkeleton = () => {
  return (
    <section className="w-full bg-white pt-12 lg:pt-16 pb-8 lg:pb-10 overflow-hidden select-none">
      <div className="max-w-[1464px] mx-auto px-4 md:px-8 lg:px-[102px] flex flex-col items-center">
        
        {/* Section Headline */}
        <Skeleton className="h-8 lg:h-10 w-60 sm:w-72 mb-10 lg:mb-14 rounded" />

        {/* Desktop: 3-Card Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10 w-full max-w-[1120px] justify-items-center mb-14">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="w-full max-w-[346px] h-[321px] bg-[#F0EEEF] border border-[#C4C4C4]/60 rounded-[8px] flex flex-col items-center justify-center px-6 py-8"
            >
              <Skeleton className="w-14 h-14 rounded-full mb-5" />
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-4 w-48 mb-2" />
              <Skeleton className="h-4 w-36" />
            </div>
          ))}
        </div>

        {/* Mobile: Single Active Card Placeholder */}
        <div className="flex lg:hidden flex-col items-center w-full max-w-[390px] mb-10">
          <div className="w-[288px] h-[300px] bg-[#F0EEEF] border border-[#C4C4C4]/60 rounded-[8px] flex flex-col items-center justify-center px-6 py-8">
            <Skeleton className="w-12 h-12 rounded-full mb-4" />
            <Skeleton className="h-5 w-28 mb-3" />
            <Skeleton className="h-4 w-44 mb-1.5" />
            <Skeleton className="h-4 w-32" />
          </div>
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
