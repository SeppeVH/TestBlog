import type { Post } from '../types'
import { formatDate } from '../utils/date'

interface PostCardProps {
  post: Post
  onSelect: (id: string) => void
}

function PostCard({ post, onSelect }: PostCardProps) {
  return (
    <article
      className="group flex cursor-pointer flex-col gap-3 rounded-2xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-500/40"
      onClick={() => onSelect(post.id)}
    >
      <div className="flex flex-wrap items-center gap-2">
        <time className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500 dark:bg-white/10 dark:text-neutral-400">
          {formatDate(post.date)}
        </time>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="m-0 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {post.title}
      </h2>

      <p className="m-0 text-neutral-600 dark:text-neutral-400">
        {post.excerpt}
      </p>

      <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
        Read article
        <svg
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </article>
  )
}

export default PostCard