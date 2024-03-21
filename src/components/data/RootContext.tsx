import React, { createContext, useState } from 'react';

interface iRootContext  {
    setUser: (user: {[key: string]: any}) => void,
    user?: { [key: string]: any }
}

export const RootContext = createContext<iRootContext>({setUser: user => {}})

const RootContextProvider: React.ElementType = ({children}) => {
    const [user, setUser] = useState({})

    const value = {
        user,
        setUser
    }

    return (
        <RootContext.Provider value={value}>
            {children}
        </RootContext.Provider>
    )
}

export default RootContextProvider