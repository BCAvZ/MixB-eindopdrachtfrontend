import React from 'react';
import styles from './RecipePreviewer.module.css'

export function RecipePreviewer({apiResult}) {

    return (
        <div className={styles['searchResultWrapper']}>
            {apiResult.map((result) =>
                                <div key={result.idDrink} className={styles['PreviewContainer']}>
                                    <div className={styles['ImageWrapper']} >
                                        <img src={result.strDrinkThumb} alt='drink'></img>
                                    </div>
                                    <div className={styles['TextWrapper']}>
                                        <h4> {result.strDrink},</h4>
                                        <p>    Glas: {result.strGlass}</p>
                                    </div>
                                </div>
            )}
        </div>
    );
};