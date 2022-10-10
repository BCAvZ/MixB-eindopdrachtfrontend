import React from 'react';
import {Link} from "react-router-dom";

export function Login({toggleAuth}) {


    function signIn() {
        toggleAuth(true);
    }

    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button type="button" onClick={signIn}>
                <Link to="UserAccount/:Username" className="login-button"> Inloggen </Link>
            </button>
        </section>
    );
}
