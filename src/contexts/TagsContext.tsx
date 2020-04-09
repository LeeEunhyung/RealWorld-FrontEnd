import { createContext } from 'react'
import { Tags } from '../models/view-models/TagsViewModel'

export const TagsContext = createContext(new Tags())
