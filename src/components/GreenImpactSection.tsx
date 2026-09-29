import { urlFor } from '../lib/sanity';
import {
  useGreenImpactData,
  fallbackGreenMetrics,
  type GreenImpactMetric,
} from '../hooks/useGreenImpactData';

export const GreenImpactSection = () => {
  const { data } = useGreenImpactData();

  const title = data?.title || 'Our total green impact';
  const metrics: GreenImpactMetric[] =
    data?.stats && data.stats.length > 0
      ? data.stats.map((s, idx) => ({
          icon: s.icon,
          iconFallback:
            fallbackGreenMetrics[idx]?.iconFallback || '/figma-assets/green-co2.svg',
          value: s.value || fallbackGreenMetrics[idx]?.value || '',
          label: s.label || fallbackGreenMetrics[idx]?.label || '',
        }))
      : fallbackGreenMetrics;

  const mobileMetrics = metrics
    .filter((m) => !m.label.toLowerCase().includes('energy'))
    .slice(0, 2);

  const resolveIconSrc = (metric: GreenImpactMetric) => {
    if (metric.icon) {
      try {
        const url = urlFor(metric.icon).url();
        if (url) return url;
      } catch {
        return metric.iconFallback;
      }
    }
    return metric.iconFallback;
  };

  return (
    <section className="w-full bg-[#F0EEEF] mt-12 lg:mt-16 py-10 lg:py-[39px]">
      <div className="max-w-[1464px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline (Figma #1:1435 / #1:1812) */}
        <h2 className="text-center font-sofia font-normal text-[25px] leading-[40px] tracking-[0.04em] text-[#15005B] mb-8 lg:mb-9">
          {title}
        </h2>

        {/* Desktop 3-Column Layout with Vertical Dividers (Figma #1:1432) */}
        <div className="hidden md:flex items-center justify-center max-w-[1020px] mx-auto">
          {metrics.map((metric, index) => {
            const isLast = index === metrics.length - 1;
            return (
              <div key={index} className="contents">
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-[42px] h-[42px] shrink-0 mb-3 flex items-center justify-center">
                    <img
                      src={resolveIconSrc(metric)}
                      alt={metric.label}
                      className="w-[42px] h-[42px] object-contain"
                    />
                  </div>
                  <div className="font-sofia font-semibold text-[22px] leading-[22px] tracking-[0.02em] text-[#15005B] mb-1">
                    {metric.value}
                  </div>
                  <div className="font-sofia font-normal text-[14px] leading-[20px] tracking-[0.03em] text-[#15005B]">
                    {metric.label}
                  </div>
                </div>

                {/* Vertical Divider (Figma #1:1630 / #1:1631) */}
                {!isLast && (
                  <div
                    className="w-[1px] h-[90px] bg-[#C4C4C4]/60 shrink-0 self-center"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Stack (Figma #2:1048 — Excludes Energy Saved) */}
        <div className="flex md:hidden flex-col items-center max-w-[340px] mx-auto">
          {mobileMetrics.map((metric, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              <div className="flex flex-col items-center text-center py-3">
                <div className="w-[42px] h-[42px] shrink-0 mb-3 flex items-center justify-center">
                  <img
                    src={resolveIconSrc(metric)}
                    alt={metric.label}
                    className="w-[42px] h-[42px] object-contain"
                  />
                </div>
                <div className="font-sofia font-semibold text-[22px] leading-[22px] tracking-[0.02em] text-[#15005B] mb-1">
                  {metric.value}
                </div>
                <div className="font-sofia font-normal text-[14px] leading-[20px] tracking-[0.03em] text-[#15005B]">
                  {metric.label}
                </div>
              </div>

              {/* Horizontal Divider (Figma #1:1822 between items, #1:1823 after item 2) */}
              <div
                className="w-[282px] h-[1px] bg-[#C4C4C4]/60 my-2"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
