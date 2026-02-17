import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { WritingPiece, WritingCategory } from "@/interfaces/writing";

const writingDirectory = join(process.cwd(), "content", "writing");

export function getWritingSlugs(): string[] {
  return fs.readdirSync(writingDirectory).filter((f) => f.endsWith(".md"));
}

export function getWritingBySlug(slug: string): WritingPiece {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(writingDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    category: data.category as WritingCategory,
    summary: data.summary,
    tags: data.tags || [],
    content,
  };
}

export function getAllWritings(): WritingPiece[] {
  const slugs = getWritingSlugs();
  return slugs
    .map((slug) => getWritingBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
