import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Post } from '@/lib/posts'; // or '@/types/blog'

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getPostBySlug(params.slug)) as Post | undefined;
  if (!post) notFound();

  return (
    <article>
      <h1>{post.frontMatter.title}</h1>
      <time dateTime={post.frontMatter.date}>
        {new Date(post.frontMatter.date).toDateString()}
      </time>

      {/* Now TypeScript knows tags exists (and is string[] | undefined) */}
      {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
          Tags: {post.frontMatter.tags.join(', ')}
        </p>
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
