import { createContext } from 'react'
import { TagFeeds } from '../models/view-models/TagFeedsViewModel'

export const TagFeedsContext = createContext(new TagFeeds())
