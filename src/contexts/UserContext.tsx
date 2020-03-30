import { createContext } from 'react'
import { User } from '../models/view-models/UserViewModel'

export const UserContext = createContext(new User())
