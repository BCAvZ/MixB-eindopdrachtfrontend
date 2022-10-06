import React from 'react';
import {Redirect, Route} from "react-router-dom";


export function PrivateRoute( { isAuth, children, ...rest }) {
    return (
        <Route {...rest}>
            {isAuth === true ? children : <Redirect to="/" />}
        </Route>
    );
}

