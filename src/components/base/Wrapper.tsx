import type { ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
};

export const Wrapper = ({ children, className = '', as: Component = 'div' }: WrapperProps) => {
  return (
    <Component className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
};
