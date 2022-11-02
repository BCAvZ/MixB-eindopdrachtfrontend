import React from 'react';
import styles from './Recipe.module.css'

export function Recipe({apiResult}) {
    return (
        <div>
            {Object.keys(apiResult).length > 0 &&
                <>
                    <p> {apiResult[0].strDrink}</p>
                    <div className={styles['ImageWrapper']} >
                     <img src={apiResult[0].strDrinkThumb} alt='drink'></img>
                    </div>
                    <p>Glas: {apiResult[0].strGlass}</p>
                    <p>{apiResult[0].strAlcoholic}</p>
                    <p>Catagorie: {apiResult[0].strCategory}</p>
                    <p>Ingredienten:</p>
                    <p>{apiResult[0].strMeasure1} {apiResult[0].strIngredient1} </p>
                    <p>{apiResult[0].strMeasure2} {apiResult[0].strIngredient2} </p>
                    <p>{apiResult[0].strMeasure3} {apiResult[0].strIngredient3} </p>
                    <p>{apiResult[0].strMeasure4} {apiResult[0].strIngredient4} </p>
                    <p>{apiResult[0].strMeasure5} {apiResult[0].strIngredient5}</p>
                    <p>{apiResult[0].strMeasure6} {apiResult[0].strIngredient6} </p>
                    <p>{apiResult[0].strMeasure7} {apiResult[0].strIngredient7} </p>
                    <p>{apiResult[0].strMeasure8} {apiResult[0].strIngredient8} </p>
                    <p>{apiResult[0].strMeasure9} {apiResult[0].strIngredient9} </p>
                    <p>Bereidwijze: {apiResult[0].strInstructions}</p>
                </>
            }
        </div>
    );
};