import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className='max-w-3xl mx-auto px-6 py-16'>
      {/* Back Button */}
      <Link
        href='/blog'
        className='inline-flex items-center gap-2 text-sm text-(--text-tertiary) hover:text-blue-500 mb-8 transition-colors'
      >
        <ArrowLeft className='h-4 w-4' /> Back to Blog
      </Link>

      <article>
        {/* Header */}
        <header className='mb-10'>
          <h1 className='text-4xl md:text-5xl font-bold text-(--text-primary) leading-tight'>
            {post.frontMatter.title}
          </h1>

          <div className='flex flex-wrap items-center gap-6 mt-6 text-(--text-secondary)'>
            <div className='flex items-center gap-2 text-sm'>
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
                      className='bg-[var(--bg-secondary)] border border-[var(--border)] px-2 py-0.5 rounded text-xs'
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
          className='prose prose-invert max-w-none 
            prose-headings:text-[var(--text-primary)] 
            prose-p:text-[var(--text-secondary)] 
            prose-strong:text-[var(--text-primary)]
            prose-li:text-[var(--text-secondary)]
            prose-code:text-blue-400'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
