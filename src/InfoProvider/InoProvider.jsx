import { createContext } from "react";
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

export const InfoContext = createContext(null);

export default function InfoProvider({children}){

    const newAccountOpen=(value)=>{
        createUserWithEmailAndPassword(auth,value.email,value.password)
        .then((userInfo)=>{
            updateProfile(auth.currentUser,{
                displayName: value.userName
            })
            .then(()=>{
                console.log(userInfo)
            })
        })
    }

    const googleUser=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(userInfo=>console.log(userInfo))
    }

    const facebookUser=()=>{
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth,facebookProvider)
        .then(userInfo=>console.log(userInfo))
    }
    const allInfo = {newAccountOpen,googleUser,facebookUser};
    return(
        <>
            <InfoContext.Provider value={allInfo}>
                {children}
            </InfoContext.Provider>
        </>
    )
}