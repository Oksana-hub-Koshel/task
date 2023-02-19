import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const RequireAuth = ({children}) => {
    const location=useLocation()

    const {user}=useAuth()

    if(!user){
        return <Navigate to='/profile' state={{from: location}}/>
    }
    return children
};

export default RequireAuth;