import { getPostBySlug, getAllPosts, type Post } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Section, BackNav } from '@/components';

// 1. Correct Type for Next.js 16 params
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  // 2. Await the params before using slug
  const { slug } = await params;

  const post = (await getPostBySlug(slug)) as Post | null;
  if (!post) notFound();

  return (
    <>
      <Section title={post.frontMatter.title}>
        <article>
          <div className='flex gap-4'>
            <Calendar className=' h-4 w-4' />
            <time dateTime={post.frontMatter.date}>
              {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
          <BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black' />
          {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
            <div className='flex items-center gap-4 text-sm'>
              <Tag className='h-4 w-4' />
              <div className='flex gap-1 flex-wrap'>
                {post.frontMatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-(--bg-secondary) border border-(--border) px-2 py-0.5  text-xs'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div
            className='mt-3 text-body'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Section>
    </>
  );
}
