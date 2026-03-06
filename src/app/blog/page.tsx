import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.frontMatter.title} —{' '}
              {new Date(post.frontMatter.date).toDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
