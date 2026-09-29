import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface BestSelfData {
  headline?: string;
  paragraphs?: string[];
  mainImage?: any;
  secondaryImageTop?: any;
  secondaryImageBottom?: any;
  buttonText?: string;
}

export const fallbackParagraphs: string[] = [
  "Hi! My name’s [Insert Name], and I founded [Insert] in ____.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  "Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.",
  "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.",
  "Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.",
  "Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.",
  "Cras mattis varius mollis.",
];

export const useBestSelfData = () => {
  return useQuery({
    queryKey: ['bestSelfData'],
    queryFn: async () => {
      try {
        const query = `*[_type == "productPage"][0]{bestSelf}`;
        const data = await client.fetch<{ bestSelf?: BestSelfData }>(query);
        return data?.bestSelf || null;
      } catch (e) {
        console.warn('Failed to fetch bestSelf data from Sanity, using fallback:', e);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
