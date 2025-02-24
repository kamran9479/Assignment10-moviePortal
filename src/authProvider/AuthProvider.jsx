import { createContext, useEffect, useState } from 'react';
import { auth } from './../firebas/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';




export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')


    const handleLogin = (email, password) => {
        setErrorMsg('');
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
            }
            ).catch(error => setErrorMsg('Invalid Email OR Password'));
    };

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log('signup', result.user)
            })
    };

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    
    const manageProfile = (update)=>{
        return updateProfile(auth.currentUser, update)
    }
    const handleLogOut = () => {
        return signOut(auth)
            .then(() => {
                console.log('signOut')
                setUser(null)

            })
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                console.log('logged iinnn', currentUser)
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
            setLoading(false)
            return () => {
                unSubscribe()
            }
        })
    }, []);


    const info = {
        handleLogin,
        handleRegister,
        logInWithGoogle,
        handleLogOut,
        user,
        setUser,
        errorMsg,
        loading,
        manageProfile

    }

    return (
        <div>
            <authContext.Provider value={info}>
                {
                    children
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;