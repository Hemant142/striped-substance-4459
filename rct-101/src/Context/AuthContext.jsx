import { useState } from "react";
import { createContext } from "react";

export let AuthContext=createContext();
function AuthContextProvider({children}) {
    let [isAuth,setisAuth]=useState(false)
    let [token,setToken]=useState(null);
    function loginUser(value){
        setisAuth(true)
        setToken(value)
    }
    function logoutUser(){
        setisAuth(false)
        setToken(null)
    }
    let authState=[isAuth,token]
    return(
        <AuthContext.Provider
        value={{authState,loginUser,logoutUser}}
        >{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider;
