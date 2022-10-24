import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom'
import styles from './TopMenu.module.css'
import CocktailPicture from '../../assets/pictures/Cocktail-home.png'
import RandomPicture from '../../assets/pictures/Question-cocktail.png'
import blogPicture from '../../assets/pictures/blog-cocktail.png'
import loginPicture from '../../assets/pictures/Login-empty-face.png'
import {AuthContext} from "../../context/AuthContext";


export function TopMenu() {

    const {isAuth} = useContext(AuthContext)

    const [isActive, setIsActive] = useState('/');

    return (
        <nav>

            <ul className={styles['Navbar']}>
                <li>

                    <NavLink to="/" onClick={() => setIsActive('/')} className={isActive === '/' ? styles['link-is-active'] : styles['link-is-not-active']}>
                        <img src={CocktailPicture} alt='drink' className={styles['navBarPic']}/> Home
                    </NavLink>

                </li>

                <li>
                    <NavLink to="/RandomCocktail" onClick={() => setIsActive('/RandomCocktail')} className={isActive === '/RandomCocktail' ? styles['link-is-active'] : styles['link-is-not-active']}>
                        <img src={RandomPicture} alt='drink' className={styles['navBarPic']}/> Random Cocktail!
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/BlogOverview" onClick={() => setIsActive('/BlogOverview')} className={isActive === '/BlogOverview' ? styles['link-is-active'] : styles['link-is-not-active']}>
                        <img src={blogPicture} alt='drink' className={styles['navBarPic']}/> Blog!
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
                            <img src={loginPicture} alt='drink' className={styles['navBarPic']}/> Login
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}