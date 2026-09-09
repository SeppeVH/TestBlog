import type { Post } from './types'

export const posts: Post[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    date: '2026-09-01',
    excerpt: 'This is my very first blog post on this new site.',
    content:
      'Welcome to my test blog! I just set this up using React, TypeScript, and Vite. It deploys to GitHub Pages so I can share it with anyone.\n\nThere is not much here yet, but stay tuned for more posts as I experiment with different ideas and technologies.',
    tags: ['Meta'],
  },
  {
    id: 'typescript-is-great',
    title: 'TypeScript is Great',
    date: '2026-09-05',
    excerpt: 'A quick take on why I enjoy using TypeScript for web projects.',
    content:
      'TypeScript adds a layer of type safety that catches bugs early. When working on a project like this blog, it helps keep components and data structures consistent.\n\nEven for a small project, the autocomplete and error highlighting in the editor make the development experience much smoother.',
    tags: ['TypeScript', 'Dev'],
  },
  {
    id: 'github-pages-deploy',
    title: 'Deploying to GitHub Pages',
    date: '2026-09-09',
    excerpt: 'How this site gets deployed with a single command.',
    content:
      'GitHub Pages is a free and easy way to host static sites. Combined with Vite\'s build tool and the gh-pages npm package, deploying is as simple as running npm run deploy.\n\nThe build output goes into the dist folder, and gh-pages pushes it to the gh-pages branch where GitHub serves it from.',
    tags: ['Deploy', 'GitHub'],
  },
]