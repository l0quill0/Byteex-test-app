import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface LoungewearPillar {
  title: string;
  description: string;
  icon?: any;
  fallbackIcon?: string;
}

export interface LoungewearSlide {
  id?: number | string;
  name: string;
  src?: string;
  image?: any;
  alt: string;
}

export interface LoungewearData {
  headline?: string;
  buttonText?: string;
  reviewText?: string;
  pillars?: LoungewearPillar[];
  slides?: LoungewearSlide[];
}

export const fallbackPillars: LoungewearPillar[] = [
  {
    fallbackIcon: '/figma-assets/feature-icon-2.svg',
    title: 'Ethically sourced.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    fallbackIcon: '/figma-assets/feature-pillar-3.svg',
    title: 'Responsibly made.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    fallbackIcon: '/figma-assets/feature-pillar-2.svg',
    title: 'Made for living in.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    fallbackIcon: '/figma-assets/feature-pillar-4.svg',
    title: 'Unimaginably comfortable.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

export const fallbackSlides: LoungewearSlide[] = [
  { id: 1, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
  { id: 2, name: 'White Robe', src: '/figma-assets/product-slide-1.png', alt: 'White Robe showcase' },
  { id: 3, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
  { id: 4, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
  { id: 5, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
  { id: 6, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
  { id: 7, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
  { id: 8, name: 'Gray Suite', src: '/figma-assets/product-slide-2.png', alt: 'Gray Suite showcase' },
];

export const fallbackLoungewearData: LoungewearData = {
  headline: 'Loungewear you can be proud of.',
  buttonText: 'Customize Your Outfit',
  reviewText: 'Over 500+ 5 Star Reviews Online',
  pillars: fallbackPillars,
  slides: fallbackSlides,
};

export const useLoungewearData = () => {
  return useQuery<LoungewearData>({
    queryKey: ['loungewearData'],
    queryFn: async () => {
      try {
        const query = `*[_type == "productPage"][0]{loungewearSection}`;
        const data = await client.fetch<{ loungewearSection?: LoungewearData }>(query);
        return data?.loungewearSection || fallbackLoungewearData;
      } catch (e) {
        console.warn('Failed to fetch loungewear data from Sanity, using fallback:', e);
        return fallbackLoungewearData;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
