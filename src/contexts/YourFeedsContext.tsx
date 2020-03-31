import { createContext } from 'react'
import { YourFeeds } from '../models/view-models/YourFeedsViewModel'

export const YourFeedsContext = createContext(new YourFeeds())
