import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function PrivateRoute( { children, ...rest }) {

    const { isAuth } = useContext(AuthContext)

    return (
        <Route {...rest}>
            {isAuth === true ? children : <Redirect to="/" />}
        </Route>
    );
}

