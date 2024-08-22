import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

export const Protected = ({ComponentName}) =>{
    let navigate = useNavigate();
    useEffect(()=>{
         
        if(!user){
            navigate('/login');
        }
    })
    return (
        <div>
            <ComponentName />
        </div>
    )


}