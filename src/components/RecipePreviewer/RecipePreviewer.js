import React from 'react';
import styles from './RecipePreviewer.module.css'
import {NavLink} from "react-router-dom";

export function RecipePreviewer({apiResult}) {

    return (
        <article className={styles['searchResultWrapper']}>
            {apiResult.map((result) =>
                <NavLink to={`/RecipePage/${result.strDrink}`} className={styles['PreviewContainer']} key={result.idDrink} >
                                <div  className={styles['PreviewContainerText']} >
                                    <div className={styles['ImageWrapper']}>
                                        <img src={result.strDrinkThumb} alt='drink'></img>
                                    </div>
                                    <div className={styles['TextWrapper']}>
                                        <h4> {result.strDrink}</h4>
                                        <p>    Click for recipe! </p>
                                    </div>
                                </div>
                </NavLink>
            )}
        </article>
    );
};