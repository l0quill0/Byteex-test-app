import { Skeleton } from '../base';

export const GreenImpactSkeleton = () => {
  return (
    <section className="w-full bg-[#F0EEEF] mt-12 lg:mt-16 py-10 lg:py-[39px] select-none">
      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="flex justify-center mb-8 lg:mb-9">
          <Skeleton className="h-8 lg:h-10 w-64 sm:w-80 rounded" />
        </div>

        {/* Desktop 3-Column Layout with Vertical Dividers */}
        <div className="hidden md:flex items-center justify-center max-w-[1020px] mx-auto">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="contents">
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <Skeleton className="w-[42px] h-[42px] rounded-full mb-3" />
                <Skeleton className="h-7 lg:h-8 w-28 sm:w-36 mb-2" />
                <Skeleton className="h-4 w-40" />
              </div>
              {index < 2 && (
                <div className="h-[60px] w-[1px] bg-[#C4C4C4]/60 mx-2 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile 2-Column Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4 max-w-[420px] mx-auto">
          {[1, 2].map((_, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-2">
              <Skeleton className="w-[36px] h-[36px] rounded-full mb-2" />
              <Skeleton className="h-6 w-24 mb-1.5" />
              <Skeleton className="h-3.5 w-28" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
