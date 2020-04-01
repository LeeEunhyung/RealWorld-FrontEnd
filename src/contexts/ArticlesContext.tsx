import { createContext } from 'react'
import { Articles } from '../models/view-models/ArticelsViewModel'

export const ArticlesContext = createContext(new Articles())
