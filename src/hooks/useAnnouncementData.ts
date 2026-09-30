import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface AnnouncementBarData {
  desktopText?: string;
  mobileText?: string;
}

export const fallbackAnnouncementData: AnnouncementBarData = {
  desktopText:
    'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window.',
  mobileText: 'FREE SHIPPING on orders > $200',
};

export const useAnnouncementData = () => {
  return useQuery<AnnouncementBarData>({
    queryKey: ['announcementData'],
    queryFn: async () => {
      try {
        const query = `*[_type == "productPage"][0]{announcementBar}`;
        const data = await client.fetch<{ announcementBar?: AnnouncementBarData }>(query);
        return data?.announcementBar || fallbackAnnouncementData;
      } catch (e) {
        console.warn('Failed to fetch announcement bar data from Sanity, using fallback:', e);
        return fallbackAnnouncementData;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
