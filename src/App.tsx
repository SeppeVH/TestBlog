import { useEffect, useState } from 'react'
import { posts } from './data'
import BlogFooter from './components/BlogFooter'
import BlogNavbar from './components/BlogNavbar'
import Hero from './components/Hero'
import PostList from './components/PostList'
import PostView from './components/PostView'

const THEME_KEY = 'theme'

function getInitialDark(): boolean {
  const stored = localStorage.getItem(THEME_KEY)
  return stored
    ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [dark, setDark] = useState<boolean>(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
  }, [dark])

  const selectedPost = posts.find((p) => p.id === selectedId) ?? null

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 size-96 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/25" />
        <div className="absolute -right-32 top-1/2 size-[28rem] rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute bottom-0 left-0 size-72 rounded-full bg-amber-400/15 blur-3xl dark:bg-amber-500/10" />
      </div>

      <BlogNavbar dark={dark} onToggleDark={() => setDark((d) => !d)} />

      <main className="mx-auto max-w-4xl px-6 pb-8">
        {selectedPost ? (
          <PostView post={selectedPost} onBack={() => setSelectedId(null)} />
        ) : (
          <>
            <Hero />
            <PostList posts={posts} onSelect={setSelectedId} />
          </>
        )}
      </main>

      <BlogFooter />
    </div>
  )
}

export default App