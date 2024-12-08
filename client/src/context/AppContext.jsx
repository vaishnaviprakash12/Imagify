import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const AppContext=createContext()

const AppContextProvider=(props)=>{
    const [user, setUser] = useState(null);
    const [showLogin,setShowLogin]=useState(false);
    //if any token present in browser localstorage that will store in token state variable
    const [token,setToken]=useState(localStorage.getItem('token'))
    const backendUrl=import.meta.env.VITEBACKENDURL
    //Genrate image logic
    const genrateImage=async(prompt)=>{
        try {
const {data}=await axios.post(`${backendUrl}/api/image/genrate-image`,{prompt},{headers:{token}});
if(data.sucess){
    return data.resultImage
}
else {
    toast.error(data.message)
}
        } catch (error) {
            toast.error(error.message)
        }
    }
    const logout=()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }
    const value={
        user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,logout,genrateImage
    }
    //adding token state variable to store token in local storage

    //log out functionality
 
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
