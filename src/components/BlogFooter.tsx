function BlogFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200/70 py-10 text-center dark:border-white/10">
      <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400">
        Crafted with <span className="text-sky-500">&#10084;</span> and pushed
        to GitHub Pages
      </p>
      <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
        &copy; {new Date().getFullYear()} TestBlog
      </p>
    </footer>
  )
}

export default BlogFooter