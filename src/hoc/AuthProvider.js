import {createContext, useState} from "react";

export const AuthContex=createContext(null)

export const AuthProvider=({children})=>{
    const [user, setUser]=useState(null)

    const signIn = (newUser, cb) => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb) => {
        setUser(null)
        cb()
    }
    const value={user, signIn, signOut}

    return <AuthContex.Provider value={value}>
        {children}
    </AuthContex.Provider>
}