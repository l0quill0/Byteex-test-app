export const AnnouncementBar = () => {
  return (
    <div className="w-full h-[36px] bg-[#F9F0E5] flex items-center justify-center px-4">
      <span className="text-[#565656] font-suisse text-[11px] tracking-[0.08em] uppercase hidden md:block text-center">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders &gt; $200   |   easy 45 day return window.
      </span>
      <span className="text-[#565656] font-suisse text-[11px] tracking-[0.08em] uppercase md:hidden text-center">
        FREE SHIPPING on orders &gt; $200
      </span>
    </div>
  );
};
