import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface FinalCtaData {
  title?: string;
  desktopSubtitle?: string;
  mobileSubtitle?: string;
  productCards?: Array<{
    _key?: string;
    asset?: any;
    alt?: string;
  }>;
  buttonText?: string;
  shipsInText?: string;
  freeShippingText?: string;
  reviewsText?: string;
  ethicallyMadeText?: string;
}

export const fallbackFinalCtaData: FinalCtaData = {
  title: 'Find something you love.',
  desktopSubtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  mobileSubtitle: 'Click below to browse our collection!',
  productCards: [
    { alt: 'Loungewear Outfit 1', asset: undefined },
    { alt: 'Loungewear Outfit 2', asset: undefined },
    { alt: 'Loungewear Outfit 3', asset: undefined },
  ],
  buttonText: 'Customize Your Outfit',
  shipsInText: 'Ships in 1-2 Days',
  freeShippingText: 'FREE Shipping on Orders over $200',
  reviewsText: 'Over 500+ 5 Star Reviews Online',
  ethicallyMadeText: 'Made ethically and responsibly.',
};

export const fallbackCardImages = [
  '/figma-assets/product-slide-5.png',
  '/figma-assets/product-slide-6.png',
  '/figma-assets/product-slide-2.png',
];

const FINAL_CTA_QUERY = `*[_type == "productPage"][0].finalCtaSection {
  title,
  desktopSubtitle,
  mobileSubtitle,
  productCards,
  buttonText,
  shipsInText,
  freeShippingText,
  reviewsText,
  ethicallyMadeText
}`;

export const useFinalCtaData = () => {
  return useQuery<FinalCtaData>({
    queryKey: ['finalCtaSection'],
    queryFn: async () => {
      const data = await client.fetch(FINAL_CTA_QUERY);
      return data || fallbackFinalCtaData;
    },
    initialData: fallbackFinalCtaData,
    staleTime: 1000 * 60 * 5,
  });
};
