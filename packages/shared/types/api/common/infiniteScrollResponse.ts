import { DefaultResponse } from './defaultResponse'

interface InfiniteScrollResponse<TData> extends DefaultResponse<TData> {
  totalRemaining: number
}

export type { InfiniteScrollResponse }
