import { createContext } from 'react'
import { Article } from '../models/view-models/ArticleViewModel'

export const ArticleContext = createContext(new Article())
