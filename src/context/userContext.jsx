import axios from 'axios';
import { createContext } from 'react'


export const UserContext = createContext({})

export function UserContextProvider({ children }) {
    return (
        <UserContext.Provider>

        </UserContext.Provider>
    )
}