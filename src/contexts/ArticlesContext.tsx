import { createContext } from 'react'
import { Articles } from '../models/view-models/ArticlesViewModel'

export const ArticlesContext = createContext(new Articles())
