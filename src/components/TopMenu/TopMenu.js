import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom'
import styles from './TopMenu.module.css'
import CocktailPicture from '../../assets/pictures/Cocktail-home.png'
import RandomPicture from '../../assets/pictures/Question-cocktail.png'
import blogPicture from '../../assets/pictures/blog-cocktail.png'
import loginPicture from '../../assets/pictures/Login-empty-face.png'
import {AuthContext} from "../../context/AuthContext";


export function TopMenu() {

    const {isAuth, userName, profilePicture} = useContext(AuthContext)
    const userProfile = `/Account/${userName}`

    const [isActive, setIsActive] = useState('');

    function profilePictureSet() {
        if(profilePicture) {
            return {profilePicture}
        } else {
            return {loginPicture}
        }
    }

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
                    <NavLink to="/Blog" onClick={() => setIsActive('/Blog')} className={isActive === '/Blog' ? styles['link-is-active'] : styles['link-is-not-active']}>
                        <img src={blogPicture} alt='drink' className={styles['navBarPic']}/> Blog!
                    </NavLink>
                </li>

                {isAuth === true
                    ? <>
                        <li>
                            <NavLink to={userProfile} onClick={() => setIsActive('/Account')} className={isActive === '/Account' ? styles['link-is-active'] : styles['link-is-not-active']}>
                                <picture>
                                    <source srcSet={profilePicture} type="image/webp"/>
                                        <img src={loginPicture} alt="bar" className={styles['navBarPic']}/> Account
                                </picture>
                            </NavLink>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink to="/Login" onClick={() => setIsActive('/login')} className={isActive === '/login' ? styles['link-is-active'] : styles['link-is-not-active']}>
                            <img src={loginPicture} alt='login' className={styles['navBarPic']}/> Login
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}