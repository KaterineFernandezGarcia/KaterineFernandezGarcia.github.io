export type WritingCategory = "article" | "research" | "letter";

export interface WritingPiece {
  slug: string;
  title: string;
  date: string;
  category: WritingCategory;
  summary: string;
  tags?: string[];
  content: string;
}
