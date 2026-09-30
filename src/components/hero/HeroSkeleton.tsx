import { Skeleton } from '../base';

export const HeroSkeleton = () => {
  return (
    <section className="w-full relative overflow-hidden pb-12 lg:pb-24 pt-8 lg:pt-16 bg-white select-none">
      <div className="w-full max-w-[1465px] mx-auto px-4 md:px-12 lg:pl-[102px] lg:pr-[62px] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] xl:grid-cols-[576px_725px] justify-between items-start gap-y-8">
          
          {/* 1. Headline */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 text-left flex flex-col items-center lg:items-start">
            <Skeleton className="h-8 sm:h-10 w-3/4 mb-3" />
            <Skeleton className="h-8 sm:h-10 w-full max-w-[480px] mb-8 lg:mb-10" />
          </div>

          {/* 2. 3-Card Fan Placeholder (Right) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-4 w-full flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative w-[340px] sm:w-[420px] lg:w-[540px] h-[360px] sm:h-[440px] lg:h-[520px] flex items-center justify-center">
              {/* Left angled card */}
              <div className="absolute w-[170px] sm:w-[210px] lg:w-[250px] h-[260px] sm:h-[330px] lg:h-[400px] -rotate-8 -translate-x-12 sm:-translate-x-16 rounded-[8px] overflow-hidden opacity-50 border border-[#C4C4C4]/30">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Right angled card */}
              <div className="absolute w-[170px] sm:w-[210px] lg:w-[250px] h-[260px] sm:h-[330px] lg:h-[400px] rotate-8 translate-x-12 sm:translate-x-16 rounded-[8px] overflow-hidden opacity-50 border border-[#C4C4C4]/30">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Center portrait card */}
              <div className="relative z-10 w-[190px] sm:w-[230px] lg:w-[270px] h-[280px] sm:h-[360px] lg:h-[440px] rounded-[8px] overflow-hidden shadow-sm border border-[#C4C4C4]/40">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* 3. 3 Feature Items */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-6 mb-8 lg:mb-10 w-full max-w-sm lg:max-w-none">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Skeleton className="w-[31px] h-[31px] rounded shrink-0" />
                <div className="flex-1 space-y-2 pt-0.5">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>

          {/* 4. CTA and Review Card */}
          <div className="order-4 lg:col-start-1 lg:row-start-3 flex flex-col items-center lg:items-start w-full">
            <Skeleton className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[420px] h-[56px] rounded" />
            <div className="flex items-center gap-2 mt-4">
              <Skeleton className="w-20 h-4 rounded" />
              <Skeleton className="w-48 h-3.5 rounded" />
            </div>
          </div>

        </div>

        {/* 5. Partner logos strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#EDEDED] flex items-center justify-between gap-4 px-2 sm:px-4 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-6 sm:h-7 w-20 sm:w-32 rounded" />
          ))}
        </div>
      </div>
    </section>
  );
};
