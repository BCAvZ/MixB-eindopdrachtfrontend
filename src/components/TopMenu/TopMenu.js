import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import styles from './TopMenu.module.css'

export function TopMenu({isAuth, toggleAuth}) {

    const [isActive, setIsActive] = useState('/');

    function signOut() {
        toggleAuth(false);
    }

    return (
        <nav>

            <ul className={styles['Navbar']}>
                <li>
                    <NavLink to="/" onClick={() => setIsActive('/')} className={isActive === '/' ? styles['link-is-active'] : styles['link-is-not-active']}>
                       <img src="../../assets/pictures/blog-cocktail.png" alt='drink'></img> <span>Home</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/RandomCocktail" onClick={() => setIsActive('/RandomCocktail')} className={isActive === '/RandomCocktail' ? styles['link-is-active'] : styles['link-is-not-active']}>
                        Random Cocktail!
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/BlogOverview" onClick={() => setIsActive('/BlogOverview')} className={isActive === '/BlogOverview' ? styles['link-is-active'] : styles['link-is-not-active']}>
                        Blog!
                    </NavLink>
                </li>

                {isAuth === true
                    ? <>
                        <li>
                            <NavLink to="/Account/:Username" onClick={() => setIsActive('/Account')} className={isActive === '/Account' ? styles['link-is-active'] : styles['link-is-not-active']}>
                                Account
                            </NavLink>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink to="/Login" onClick={() => setIsActive('/login')} className={isActive === '/login' ? styles['link-is-active'] : styles['link-is-not-active']}>
                            Login
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}