import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/sanity';

export interface GreenImpactMetric {
  icon?: any;
  iconFallback: string;
  value: string;
  label: string;
}

export interface GreenImpactSectionData {
  title?: string;
  stats?: GreenImpactMetric[];
}

export const fallbackGreenMetrics: GreenImpactMetric[] = [
  {
    iconFallback: '/figma-assets/green-co2.svg',
    value: '3,927 kg',
    label: 'of CO2 saved',
  },
  {
    iconFallback: '/figma-assets/green-water.svg',
    value: '2,546,167 days',
    label: 'of drinking water saved',
  },
  {
    iconFallback: '/figma-assets/green-energy.svg',
    value: '7,321 kWh',
    label: 'of energy saved',
  },
];

export const useGreenImpactData = () => {
  return useQuery<GreenImpactSectionData>({
    queryKey: ['greenImpactSection'],
    queryFn: async () => {
      try {
        const data = await client.fetch(`
          *[_type == "productPage"][0].greenImpactSection {
            title,
            stats[] {
              icon,
              value,
              label
            }
          }
        `);
        return data || {};
      } catch (err) {
        console.warn('Failed to fetch greenImpactSection from Sanity, using fallback:', err);
        return {};
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
