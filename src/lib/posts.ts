import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export async function getAllPosts() {
  const fileNames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((file) => file.endsWith('.md') || file.endsWith('.txt'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$$   |\.txt   $$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        const { data: frontMatter, content } = matter(fileContents);

        // Convert markdown → HTML (skip if plain .txt)
        let htmlContent = content;
        if (fileName.endsWith('.md')) {
          const processed = await remark().use(html).process(content);
          htmlContent = processed.toString();
        }

        return {
          slug,
          frontMatter: {
            title: frontMatter.title || slug.replace(/-/g, ' '),
            date: frontMatter.date || new Date().toISOString(),
            ...frontMatter,
          },
          content: htmlContent,
          rawContent: content, // if you want to render client-side
        };
      }),
  );

  // Sort by date descending
  return posts.sort((a, b) =>
    a.frontMatter.date > b.frontMatter.date ? -1 : 1,
  );
}

export async function getPostBySlug(slug: string) {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}
