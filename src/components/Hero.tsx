function Hero() {
  return (
    <section className="pt-16 pb-12 text-center md:pt-24 md:pb-16">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
        <span className="size-1.5 rounded-full bg-sky-500" />
        New blog
      </span>

      <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Ideas, experiments{' '}
        <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
          &amp; notes
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-500 dark:text-neutral-400">
        A playground built with React, TypeScript and Tailwind — deployed to
        GitHub Pages.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#latest-posts"
          className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-transform hover:scale-105 dark:bg-white dark:text-neutral-900 dark:shadow-white/10"
        >
          Read the blog
        </a>
        <a
          href="https://github.com/SeppeVH/TestBlog"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
        >
          View source
        </a>
      </div>
    </section>
  )
}

export default Hero