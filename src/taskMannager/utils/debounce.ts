type GenericFn = (...args: unknown[]) => void

export function debounce<T extends GenericFn>(fn: T, ms: number) {
  let timeout: ReturnType<typeof setTimeout> | undefined

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), ms)
  }
}
