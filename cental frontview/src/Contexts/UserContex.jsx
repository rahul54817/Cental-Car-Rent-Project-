import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext(null);


export const Provider = (props) => {
    const [role, setRole] = useState('');
    const [decodeToken, setDecodeToken] = useState({})


    useEffect(() => {
        const token = localStorage.getItem("token");
       if(token) {
           setDecodeToken(jwtDecode(token)) 
       }
    
    
        

    },[role])


    

    return (
        <UserContext.Provider value={{ role, setRole, decodeToken}}>
            {props.children}
        </UserContext.Provider>
    );
};