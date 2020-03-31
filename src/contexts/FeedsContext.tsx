import { createContext } from 'react'
import { Feeds } from '../models/view-models/FeedsViewModel'

export const FeedsContext = createContext(new Feeds())
