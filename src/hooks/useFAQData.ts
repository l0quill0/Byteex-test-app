import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface FAQSectionData {
  headline?: string;
  faqs?: FAQItemData[];
  mainImage?: any;
  secondaryImageTop?: any;
  secondaryImageBottom?: any;
  buttonText?: string;
  reviewText?: string;
}

export const fallbackFAQs: FAQItemData[] = [
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis, bibendum dolor.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Donec placerat volutpat ligula, ac consectetur felis varius non.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Vivamus id arcu congue, faucibus libero nec, placerat ligula.',
  },
  {
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus.',
  },
];

export const useFAQData = () => {
  return useQuery({
    queryKey: ['faqSection'],
    queryFn: async (): Promise<FAQSectionData | null> => {
      try {
        const query = `*[_type == "productPage"][0]{
          faqSection,
          faqs
        }`;
        const result = await client.fetch(query);
        if (result?.faqSection?.faqs?.length) {
          return {
            ...result.faqSection,
            faqs: result.faqSection.faqs,
          };
        }
        if (result?.faqs && result.faqs.length >= 6) {
          return {
            headline: 'Frequently asked questions.',
            faqs: result.faqs,
            buttonText: 'Customize Your Outfit',
            reviewText: 'One of 500+ 5 Star Reviews Online',
          };
        }
        return {
          headline: 'Frequently asked questions.',
          faqs: fallbackFAQs,
          buttonText: 'Customize Your Outfit',
          reviewText: 'One of 500+ 5 Star Reviews Online',
        };
      } catch (err) {
        console.warn('Error fetching FAQ data from Sanity:', err);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
