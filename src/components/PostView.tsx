import type { Post } from '../types'
import { formatDate, readingTime } from '../utils/date'

interface PostViewProps {
  post: Post
  onBack: () => void
}

function PostView({ post, onBack }: PostViewProps) {
  return (
    <article className="py-10">
      <button
        type="button"
        onClick={onBack}
        className="mb-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5m6 6-6-6 6-6" />
        </svg>
        Back to all posts
      </button>

      <header className="mb-10 text-center">
        <time className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500 dark:bg-white/10 dark:text-neutral-400">
          {formatDate(post.date)} &middot; {readingTime(post.content)} min read
        </time>
        <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-prose">
        <div
          aria-hidden
          className="mb-10 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400"
        />
        {post.content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

export default PostView