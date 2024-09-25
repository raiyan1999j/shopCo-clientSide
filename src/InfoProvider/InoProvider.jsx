import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { publicRoute } from "../AxiosBase/PublicRoute";

export const InfoContext = createContext(null);

export default function InfoProvider({children}){
    const [loading,setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState(false);
    const [user,setUser] = useState(null);

    const newAccountOpen=(value)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,value.email,value.password)
        .then((userInfo)=>{
            updateProfile(auth.currentUser,{
                displayName: value.userName
            })
            .then(()=>{
                const wrap = {
                    userName : value.userName,
                    email : value.email,
                    type : "user"
                }
                publicRoute.post('/createNewAccount',wrap)
                setUser(userInfo);
                setLoading(false);
            })
        })
    }

    const googleUser=()=>{
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(userInfo=>{
            const wrap ={
                userName : userInfo.displayName,
                email : userInfo.emil,
                type:'user'
            }

            publicRoute.post('/createNewAccount',wrap);
            setUser(userInfo);
            setLoading(false);
        })
    }

    const facebookUser=()=>{
        setLoading(true);
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth,facebookProvider)
        .then(userInfo=>{
            const wrap={
                userName : userInfo.user.displayName,
                email : userInfo.user.email,
                type : 'user'
            }
            publicRoute.post('/createNewAccount',wrap)
            setUser(userInfo.user);
            setLoading(false)
        })
    }

    const logoutUser=()=>{
        setLoading(true);
        signOut(auth).then((userInfo)=>{
            setUser(null);
            setLoading(false)
        })
    }

    const loginUser=(value)=>{
        setLoading(true);
        signInWithEmailAndPassword(auth,value.email,value.password)
        .then((userInfo)=>{
            setUser(userInfo.user);
            setLoading(false);
        }).catch((error)=>{
            setErrorMessage(true);
            setTimeout(()=>{
                setErrorMessage(false);
            },5000)
            setLoading(false);
        })
    }

    useEffect(()=>{
        setLoading(true)
        onAuthStateChanged(auth,(userInfo)=>{
            if(userInfo){
                setUser(userInfo)
                setLoading(false)
                
            }else{
                setLoading(false)
            }
        })
    },[user])
    const allInfo = {newAccountOpen,googleUser,facebookUser,logoutUser,loginUser,loading,user,errorMessage};
    return(
        <>
            <InfoContext.Provider value={allInfo}>
                {children}
            </InfoContext.Provider>
        </>
    )
}