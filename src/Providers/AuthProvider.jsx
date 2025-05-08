import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(email,password)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () =>{
      setLoading(true)
      return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User --> ", currentUser);
            if (currentUser?.email) {
                setUser(currentUser);
            }else{
              setUser(null)
            }
            setLoading(false);
        });
        return () => {
            return unSubscribe();
        };
    },[]);

    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        createUser,
        signIn,
        logOut
      };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
