import React, { useContext, useEffect, useState } from "react";
import {auth} from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [currentUser , setCurrUser] = useState();
    const [loading , setLoading] = useState(true)

    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    function logout(){
        return auth.signOut();
    }
    function forgotPass(email){
        return auth.sendPasswordResetEmail(email);
    }
    function updateEmail(email){
        return currentUser.updateEmail(email);
    }

    function updatePass(password){
        return currentUser.updatePass(password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrUser(user);
          setLoading(false);
        })
    
        return unsubscribe
    }, [])
    const value = {
        currentUser,
        signUp,
        login,
        logout,
        forgotPass,
        updateEmail,
        updatePass,
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>    
    )
}