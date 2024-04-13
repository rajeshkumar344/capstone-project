import { createContext, useContext, useState } from "react";

export const AppContext = createContext("");

export const useAppContext = ()=>{
    const context = useContext(AppContext)

    if (context === undefined){
        throw new Error("app context must be within appcontextprovider")
    }
    return context;
}

export function AppStore({children}){
    const [favorites,setFavorites] = useState([])

    const  addTocart = (book)=>{
        const oldFavorites = [...favorites,book]
        setFavorites(oldFavorites)


    }
    const removeFromcart =(id)=>{ 
        const oldFavorites =[...favorites];
        const newFavorites =oldFavorites.filter((book) => book.id!==id)
        setFavorites(newFavorites)

    }

    return(

        <AppContext.Provider value ={{favorites,addTocart,removeFromcart,setFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

