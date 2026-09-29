import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, // Use CDN for faster, cacheable responses
  apiVersion: '2024-01-01', // Use current date string to avoid deprecation warnings
});
