import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface ReviewItem {
  id?: string;
  author: string;
  quote: string;
  rating?: number;
  avatar?: any;
}

export interface ReviewsSectionData {
  headline?: string;
  subtitle?: string;
  reviews?: ReviewItem[];
  fansGroupImage?: any;
  ugcImages?: any[];
  buttonText?: string;
  reviewText?: string;
}

const JANE_QUOTE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.';

export const fallbackReviews: ReviewItem[] = [
  {
    id: '1',
    author: 'Jane, S.',
    rating: 5,
    quote: JANE_QUOTE,
    avatar: '/avatar-jane.png',
  },
  {
    id: '2',
    author: 'Jane, S.',
    rating: 5,
    quote: JANE_QUOTE,
    avatar: '/avatar-jane.png',
  },
  {
    id: '3',
    author: 'Jane, S.',
    rating: 5,
    quote: JANE_QUOTE,
    avatar: '/avatar-jane.png',
  },
  {
    id: '4',
    author: 'Jane, S.',
    rating: 5,
    quote: JANE_QUOTE,
    avatar: '/avatar-jane.png',
  },
  {
    id: '5',
    author: 'Jane, S.',
    rating: 5,
    quote: JANE_QUOTE,
    avatar: '/avatar-jane.png',
  },
];

export const fallbackUgcImages: string[] = [
  '/figma-assets/product-slide-1.png',
  '/figma-assets/product-slide-2.png',
  '/figma-assets/product-slide-3.png',
  '/figma-assets/product-slide-4.png',
  '/figma-assets/product-slide-5.png',
  '/figma-assets/product-slide-6.png',
  '/figma-assets/product-slide-7.png',
  '/figma-assets/product-slide-8.png',
  '/figma-assets/white-robe-main.png',
  '/figma-assets/white-robe-thumb.png',
  '/figma-assets/hero-card-center.png',
  '/figma-assets/hero-card-right.png',
];

export const useReviewsData = () => {
  return useQuery({
    queryKey: ['reviewsData'],
    queryFn: async () => {
      try {
        const query = `*[_type == "productPage"][0]{reviewsSection}`;
        const data = await client.fetch<{ reviewsSection?: ReviewsSectionData }>(query);
        return data?.reviewsSection || null;
      } catch (e) {
        console.warn('Failed to fetch reviewsSection data from Sanity, using fallback:', e);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
