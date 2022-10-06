import React from 'react';
import {NavLink} from 'react-router-dom'

export function TopMenu({isAuthenticated, toggleAuth}) {

    function signOut() {
        toggleAuth(false);
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/RandomCocktail">
                        Cocktail van de dag!
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/BlogOverview">
                        Blog!
                    </NavLink>
                </li>

                {isAuthenticated === true
                    ? <>
                        <li>
                            <NavLink to="/UserAccount/:username">
                                UserAccount
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" onClick={signOut}>
                                Uitloggen
                            </button>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}