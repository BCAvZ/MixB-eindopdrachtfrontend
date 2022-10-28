import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function PrivateRoute( { children, ...rest }) {

    const { loginStatus } = useContext(AuthContext)

    if (!loginStatus) {
        return <Navigate to="/" replace/>
    }

    return (
        children
    );
}

