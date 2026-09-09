import type { Post } from '../types'
import PostCard from './PostCard'

interface PostListProps {
  posts: Post[]
  onSelect: (id: string) => void
}

function PostList({ posts, onSelect }: PostListProps) {
  return (
    <section id="latest-posts" className="scroll-mt-24">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="m-0 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Latest posts
          </h2>
          <h3 className="mt-1 m-0 text-2xl font-bold">From the blog</h3>
        </div>
        <span className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {posts.length} posts
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}

export default PostList