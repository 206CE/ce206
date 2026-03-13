import { getPostBySlug, getAllPosts, type Post } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { BackNav } from '@/components';

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
    <div className='max-w-3xl mx-auto px-6 py-16'>
      {/* Back Button */}
      <BackNav />


      <article className='mt-3'>
        {/* Header */}
        <header className='mb-10'>
          <h1 className='text-secondary'>
            {post.frontMatter.title}
          </h1>

          <div className='flex flex-wrap items-center gap-6 mt-6 text-(--text-secondary)'>
            <div className='flex items-center gap-2 form-label'>
              <Calendar className='h-4 w-4' />
              <time dateTime={post.frontMatter.date}>
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <div className='flex items-center gap-2 text-sm'>
                <Tag className='h-4 w-4' />
                <div className='flex gap-2'>
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
          </div>
        </header>

        {/* Content Body */}
        <div
          className='body'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
