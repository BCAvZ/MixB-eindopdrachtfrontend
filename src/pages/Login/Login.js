import React from 'react';
import {Link, Redirect} from "react-router-dom";

export function Login({loginToggle}) {

    function signIn() {
        loginToggle(true);

    }

    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button type="button" onClick={signIn}>
                <Link to="UserAccount" className="login-button"> Inloggen </Link>
            </button>
        </section>
    );
}
