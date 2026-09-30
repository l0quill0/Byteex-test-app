import { useRef, useState, useEffect } from 'react';

interface FAQItemProps {
  id?: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst?: boolean;
}

export const FAQItem = ({
  id = '0',
  question,
  answer,
  isOpen,
  onToggle,
  isFirst = false,
}: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  const buttonId = `faq-btn-${id}`;
  const panelId = `faq-panel-${id}`;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`w-full border-b border-[#EAEAEA] ${
        isFirst ? 'border-t border-[#EAEAEA]' : ''
      }`}
    >
      <button
        type="button"
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01005B]/30 group cursor-pointer"
      >
        <span className="font-sofia font-normal text-[17px] sm:text-[18px] leading-[24px] tracking-[0.04em] text-[#01005B] group-hover:opacity-85 transition-opacity">
          {question}
        </span>

        {/* Plus / Minus Morph Toggle Icon (Figma #1:1281 / #1:1282 / #1:1792 / #1:1793) */}
        <div
          className="shrink-0 w-8 h-8 flex items-center justify-center relative select-none"
          aria-hidden="true"
        >
          {/* Horizontal Bar (always present for both '+' and '-') */}
          <span className="w-4 h-[2px] bg-[#01005B] block rounded-full" />

          {/* Vertical Bar (smoothly collapses and rotates into horizontal bar when open) */}
          <span
            className={`absolute w-[2px] h-4 bg-[#01005B] block rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
            }`}
          />
        </div>
      </button>

      {/* Expandable Answer with measured scrollHeight transition & WAI-ARIA region */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          height: isOpen ? (contentHeight !== undefined ? `${contentHeight}px` : 'auto') : '0px',
        }}
        className={`overflow-hidden transition-[height,opacity] duration-320 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div ref={contentRef} className="pb-5 sm:pb-6 pr-4 sm:pr-8">
          <p className="font-sofia font-normal text-[14px] sm:text-[15px] leading-[22px] tracking-[0.03em] text-[#676869]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
