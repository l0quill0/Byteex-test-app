import { useAnnouncementData, fallbackAnnouncementData } from '../../hooks/useAnnouncementData';
import { Skeleton } from '../base';

export const AnnouncementBar = () => {
  const { data, isLoading } = useAnnouncementData();
  const desktopText = data?.desktopText || fallbackAnnouncementData.desktopText;
  const mobileText = data?.mobileText || fallbackAnnouncementData.mobileText;

  return (
    <div className="w-full h-[36px] bg-[#F9F0E5] flex items-center justify-center px-4">
      {isLoading ? (
        <Skeleton className="h-3 w-64 md:w-96 rounded-full bg-[#E8DEC8]/60" />
      ) : (
        <>
          <span className="text-[#565656] font-suisse text-[11px] tracking-[0.08em] uppercase hidden md:block text-center">
            {desktopText}
          </span>
          <span className="text-[#565656] font-suisse text-[11px] tracking-[0.08em] uppercase md:hidden text-center">
            {mobileText}
          </span>
        </>
      )}
    </div>
  );
};

