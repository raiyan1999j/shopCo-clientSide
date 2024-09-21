import { createContext } from "react"

const InfoContext = createContext(null);

export default function InfoProvider({children}){

    const allInfo = {};
    return(
        <>
            <InfoContext.Provider value={allInfo}>
                {children}
            </InfoContext.Provider>
        </>
    )
}