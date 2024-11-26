export const getDaysAgo = (date: string): string => {
  const diff = new Date().getTime() - new Date(date).getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  return `${days} days ago`
}
