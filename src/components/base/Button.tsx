import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  showArrow = true,
  className = '',
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }
    const customizeSection = document.getElementById('customize');
    if (customizeSection) {
      customizeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const variantStyles = {
    primary:
      'bg-[#01005B] text-white shadow-[0px_4px_14px_rgba(1,0,91,0.22)] hover:bg-[#15005B] hover:shadow-[0px_6px_20px_rgba(1,0,91,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    secondary:
      'bg-[#F9F0E5] text-[#01005B] hover:bg-[#f3e4d4] active:scale-[0.98]',
    outline:
      'border-2 border-[#01005B] text-[#01005B] hover:bg-[#01005B] hover:text-white active:scale-[0.98]',
  };

  return (
    <button
      onClick={handleClick}
      className={`group font-suisse text-[18px] font-normal rounded-[5px] inline-flex items-center justify-center gap-3 transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <svg
          className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 shrink-0"
          width="23"
          height="10"
          viewBox="0 0 23 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 1L22 5M22 5L18 9M22 5H0"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </button>
  );
};
