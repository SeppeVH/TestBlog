export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function readingTime(content: string): number {
  return Math.max(1, Math.round(content.split(/\s+/).length / 200))
}