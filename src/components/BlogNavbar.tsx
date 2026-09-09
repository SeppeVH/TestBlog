interface BlogNavbarProps {
  dark: boolean
  onToggleDark: () => void
}

function BlogNavbar({ dark, onToggleDark }: BlogNavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/70">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-lg font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-extrabold text-white shadow-lg shadow-blue-500/30">
            T
          </span>
          TestBlog
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
          >
            {dark ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

          <a
            href="https://github.com/SeppeVH/TestBlog"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            GitHub
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default BlogNavbar