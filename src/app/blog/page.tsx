import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className='max-w-5xl mx-auto px-6 py-16'>
      {/* Header Section */}
      <header className='flex-col justify-items-center mb-16 border-b border-(--border) pb-8'>
        <h1 className='text-4xl md:text-5xl font-bold text-(--text-primary) tracking-tight'>
          Writing & Insights
        </h1>
        <p className='mt-4 text-lg text-(--text-secondary) max-w-2xl'>
          Thoughts on Next.js, full-stack development, and the journey of
          building in the modern web.
        </p>
      </header>

      {/* Posts Grid */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
        {posts.map((post) => (
          <article
            key={post.slug}
            className='group relative flex flex-col p-6 bg-(--bg-secondary) border border-(--border) shadow-sm hover:shadow-md transition-all duration-300 rounded-lg'
          >
            <div className='flex items-center gap-2 text-sm text-(--text-tertiary) mb-3'>
              <Calendar className='h-4 w-4' />
              <time dateTime={post.frontMatter.date}>
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            <h2 className='text-2xl font-bold text-(--text-primary) group-hover:text-blue-500 transition-colors'>
              <Link href={`/blog/${post.slug}`}>
                <span className='absolute inset-0' aria-hidden='true' />
                {post.frontMatter.title}
              </Link>
            </h2>

            {/* If your frontmatter has a description, add it here */}
            {post.frontMatter.description && (
              <p className='mt-3 text-(--text-secondary) line-clamp-2'>
                {post.frontMatter.description}
              </p>
            )}

            <div className='mt-auto pt-6 flex items-center text-sm font-semibold text-blue-500 group-hover:gap-2 transition-all'>
              Read Article <ArrowRight className='h-4 w-4 ml-1' />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
