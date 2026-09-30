import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  rounded?: string;
}

export const Skeleton = ({
  className = '',
  rounded = 'rounded',
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-[#EDEDED] ${rounded} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
};
