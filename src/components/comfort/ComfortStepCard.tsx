import { urlFor } from '../../lib/sanity';
import type { ComfortStep } from '../../hooks';

interface ComfortStepCardProps {
  step: ComfortStep;
  className?: string;
}

export const ComfortStepCard = ({ step, className = '' }: ComfortStepCardProps) => {
  let iconSrc = '/figma-assets/step-save.svg';

  if (step.icon) {
    if (typeof step.icon === 'string') {
      iconSrc = step.icon;
    } else if (typeof step.icon === 'object' && step.icon.asset) {
      try {
        iconSrc = urlFor(step.icon).url() || iconSrc;
      } catch {
        // fallback
      }
    }
  }

  const bgColor = step.isHighlighted ? 'bg-[#F9F0E6]' : 'bg-[#F0EEEF]';

  return (
    <div
      className={`w-full max-w-[346px] h-[321px] ${bgColor} border border-[#C4C4C4]/60 rounded-[8px] flex flex-col items-center justify-center px-6 py-8 text-center select-none shadow-[0px_3px_10px_0px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Icon Area */}
      <div className="h-[60px] flex items-center justify-center mb-5 shrink-0">
        <img
          src={iconSrc}
          alt={step.title}
          className="max-h-[54px] max-w-[68px] object-contain"
        />
      </div>

      {/* Step Title */}
      <h3 className="font-sofia font-normal text-[22px] leading-[30px] lg:leading-[36px] text-[#01005B] tracking-[0.04em] mb-3">
        {step.title}
      </h3>

      {/* Step Description */}
      <p className="font-sofia font-normal text-[15px] leading-[22px] lg:leading-[23px] text-[#676869] tracking-[0.03em] max-w-[275px]">
        {step.description}
      </p>
    </div>
  );
};
