import { Skeleton } from '../base';

export const FinalCtaSkeleton = () => {
  return (
    <section
      className="w-full pt-14 lg:pt-20 pb-16 lg:pb-24 overflow-hidden relative select-none"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 20%, rgba(249, 240, 229, 0.2) 55%, rgba(249, 240, 229, 0.55) 100%)',
      }}
    >
      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Headline */}
        <Skeleton className="h-8 sm:h-10 lg:h-11 w-64 sm:w-80 mb-3 rounded" />

        {/* Subtitle */}
        <Skeleton className="h-4 w-full max-w-[540px] mb-10 lg:mb-12" />

        {/* 3 Showcase Product Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 w-full max-w-[1100px] mb-12">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-[360px] sm:h-[420px] lg:h-[460px] rounded-[8px] overflow-hidden border border-[#C4C4C4]/40 bg-white p-2 shadow-sm"
            >
              <Skeleton className="w-full h-full rounded-[6px]" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Skeleton className="w-full max-w-[381px] h-[56px] rounded mb-8" />

        {/* Trust & Guarantee Indicators (4 items) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[960px] mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <Skeleton className="w-5 h-5 rounded-full shrink-0" />
              <Skeleton className="h-4 w-28" />
            </div>
          ))}
        </div>

        {/* Payment Badges Strip */}
        <div className="flex justify-center items-center gap-2">
          <Skeleton className="h-7 w-64 rounded" />
        </div>
      </div>
    </section>
  );
};
