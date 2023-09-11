declare module 'use-lodash-debounce' {
  export function useDebouncedCallback<
    T extends (...args: unknown[]) => unknown
  >(callback: T, delay?: number, options?: DebounceSettings): T & Cancelable
  export function useDebounce<T>(
    value: T,
    delay?: number,
    options?: DebounceSettings
  ): T
}
