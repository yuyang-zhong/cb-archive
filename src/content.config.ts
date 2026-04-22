import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const archivalSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date().optional(),
  lastUpdated: z.string().optional(),
  pdfLink: z.string().optional(),
  category: z.string().optional(),
  cost: z.string().optional(), // Display string
  monthlyCost: z.number().optional(), // Numeric for calculations
  oneTimeCost: z.string().optional(), // For set-up or transition fees
  status: z.enum(['Active', 'Terminated', 'Expired']).default('Active'),
  executedDate: z.string().optional(),
  terminationDate: z.string().optional(),
  keyTakeaways: z.array(z.string()).optional(),
});

export const collections = {
  'governing': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/governing" }),
    schema: archivalSchema
  }),
  'policies': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/policies" }),
    schema: archivalSchema
  }),
  'financials': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/financials" }),
    schema: archivalSchema
  }),
  'history': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/history" }),
    schema: archivalSchema
  }),
  'parking': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/parking" }),
    schema: archivalSchema
  }),
  'contracts': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/contracts" }),
    schema: archivalSchema
  }),
};
