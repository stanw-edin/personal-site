// Pulls the first image out of a post's markdown body, so the blog index can
// show a preview thumbnail without needing a separate "cover image" frontmatter
// field - just embed an image in the post and it becomes the card preview.
export function extractFirstImage(body: string | undefined): string | null {
  if (!body) return null;

  // Markdown syntax: ![alt](path "optional title")
  const markdownMatch = body.match(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/);
  if (markdownMatch) return markdownMatch[1];

  // Raw <img src="..."> embedded in the markdown, in case that's used instead.
  const htmlMatch = body.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (htmlMatch) return htmlMatch[1];

  return null;
}
