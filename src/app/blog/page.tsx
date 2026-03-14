import { getAllPosts, type Post } from '@/lib/posts';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Section } from '@/components';

export default async function BlogIndex() {
  const posts = (await getAllPosts()) as Post[];

  return (
    <Section title='Writing & Insights' subtitle='Thoughts on Next.js full stack development'>
      <div className='max-w-5xl mx-auto px-6 py-16'>


        {/* Posts Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
          {posts.map((post) => (
            <article key={post.slug} className='cards'>
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
    </Section>
  );
}
