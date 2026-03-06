import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.frontMatter.title}</h1>
      <time>{new Date(post.frontMatter.date).toDateString()}</time>
      {post.frontMatter.tags && <p>Tags: {post.frontMatter.tags.join(', ')}</p>}

      {/* For markdown: use dangerouslySetInnerHTML or better – remark/gfm */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export const dynamicParams = false; // 404 on unknown slugs (optional)
