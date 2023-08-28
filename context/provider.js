'use client'

import React, { createContext, useState } from 'react'
import { SessionProvider } from 'next-auth/react'

const AppProvider = ({ children }) => {

    return (
        // <AppContext.Provider value={[state, setState]}>
            <SessionProvider>
                {children}
            </SessionProvider>
        // </AppContext.Provider>
    )
}

export default AppProvider;