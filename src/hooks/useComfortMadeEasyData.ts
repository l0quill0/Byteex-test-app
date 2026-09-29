import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface ComfortStep {
  stepNumber?: number;
  title: string;
  description: string;
  icon?: any;
  isHighlighted?: boolean;
}

export interface ComfortMadeEasyData {
  headline?: string;
  steps?: ComfortStep[];
  buttonText?: string;
  reviewText?: string;
}

export const fallbackSteps: ComfortStep[] = [
  {
    stepNumber: 1,
    title: 'You save.',
    description: 'Browse our comfort sets and save 15% when you bundle.',
    icon: '/figma-assets/step-save.svg',
    isHighlighted: false,
  },
  {
    stepNumber: 2,
    title: 'We ship.',
    description: 'We ship your items within 1-2 days of receiving your order.',
    icon: '/figma-assets/step-ship.svg',
    isHighlighted: true,
  },
  {
    stepNumber: 3,
    title: 'You enjoy!',
    description: 'Wear hernest around the house, out on the town, or in bed.',
    icon: '/figma-assets/step-enjoy.svg',
    isHighlighted: false,
  },
];

export const useComfortMadeEasyData = () => {
  return useQuery({
    queryKey: ['comfortMadeEasyData'],
    queryFn: async () => {
      try {
        const query = `*[_type == "productPage"][0]{comfortMadeEasy}`;
        const data = await client.fetch<{ comfortMadeEasy?: ComfortMadeEasyData }>(query);
        return data?.comfortMadeEasy || null;
      } catch (e) {
        console.warn('Failed to fetch comfortMadeEasy data from Sanity, using fallback:', e);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
