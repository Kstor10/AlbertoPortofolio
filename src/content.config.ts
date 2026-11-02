import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localizedProject = z.object({
  title: z.string(),
  eyebrow: z.string(),
  summary: z.string(),
  problem: z.string(),
  solution: z.array(z.string()),
  result: z.string(),
  stack: z.array(z.string()),
  role: z.array(z.string()),
  gallery: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
    }),
  ),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number().int().positive(),
    year: z.string(),
    status: z.enum(["functional", "prototype", "academic"]),
    cover: z.string(),
    accent: z.enum(["lime", "violet", "cyan", "amber", "rose"]),
    repo: z.url().optional(),
    es: localizedProject,
    en: localizedProject,
  }),
});

export const collections = { projects };
