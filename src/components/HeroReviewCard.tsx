

export const HeroReviewCard = () => {
  return (
    <div className="bg-white rounded-[8px] border border-[#EAEAEA] shadow-[0px_3px_10px_rgba(0,0,0,0.08)] p-3.5 sm:p-4 w-full max-w-[358px] sm:max-w-[454px]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
        <div className="flex items-center gap-3">
          <div className="w-[39px] h-[39px] rounded-full overflow-hidden shrink-0 bg-gray-200">
            <img src="/avatar-jane.png" alt="Amy P." className="w-full h-full object-cover" />
          </div>
          <span className="font-sofia text-[15px] font-medium text-[#676869]">
            Amy P.
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-0 sm:ml-auto flex-wrap">
          <div className="flex text-[#FFB801] text-[12px] leading-none tracking-widest">
            ★★★★★
          </div>
          <span className="font-suisse text-[10px] sm:text-[11px] text-[#828282] uppercase tracking-wide">
            One of 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>

      <p className="font-suisse text-[12px] leading-[20px] text-[#676869] mt-3">
        Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.
      </p>
    </div>
  );
};
