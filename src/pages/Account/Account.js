import React, {useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";

export function Account() {

    const {logout} = useContext(AuthContext)

    return (
        <div>
            <p>je bent er!</p>

            <button type="button" onClick={logout}>
                Uitloggen
            </button>

        </div>
    );
}
