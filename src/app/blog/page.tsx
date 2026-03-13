import { getAllPosts, type Post } from '@/lib/posts';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default async function BlogIndex() {
  const posts = (await getAllPosts()) as Post[];

  return (
    <div className='max-w-5xl mx-auto px-6 py-16'>
      {/* Header Section */}
      <header className='flex-col justify-items-center mb-16 border-b border-(--border) pb-8'>
        <h1 className='text-primary'>
          Writing & Insights
        </h1>
        <p className='text-lead'>
          Thoughts on Next.js, full-stack development, and the journey of
          building in the modern web.
        </p>
      </header>

      {/* Posts Grid */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
        {posts.map((post) => (
          <article
            key={post.slug}
            className='cards'
          >
            <div className='flex gap-2 form-label'>
              <Calendar className='h-4 w-4' />
              <time dateTime={post.frontMatter.date}>
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            <h2 className='text-card-primary'>
              <Link href={`/blog/${post.slug}`}>
                <span className='absolute inset-0' aria-hidden='true' />
                {post.frontMatter.title}
              </Link>
            </h2>

            {/* If your frontmatter has a description, add it here */}
            {post.frontMatter.description && (
              <p className='text-card-secondary'>
                {post.frontMatter.description}
              </p>
            )}


          </article>
        ))}
      </div>
    </div>
  );
}
