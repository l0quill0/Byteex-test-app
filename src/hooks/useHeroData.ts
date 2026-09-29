import { useQuery } from '@tanstack/react-query'
import { client } from '../lib/sanity'

export interface PageData {
  hero: {
    headline: string;
    backgroundImage?: any;
    productImages?: any[];
    asSeenInLogos?: any[];
  };
  features?: {
    description: string;
    icon?: any;
  }[];
}

export const useHeroData = () => {
  return useQuery({
    queryKey: ['heroData'],
    queryFn: async () => {
      const query = `*[_type == "productPage"][0]{hero, features}`
      const data = await client.fetch<PageData>(query)
      return data
    }
  })
}
