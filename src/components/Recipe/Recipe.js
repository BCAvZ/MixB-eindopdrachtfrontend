import React from 'react';
import styles from './Recipe.module.css'

export function Recipe({apiResult}) {
    return (
        <div>
            {Object.keys(apiResult).length > 0 &&
                <>
                    <h2> {apiResult[0].strDrink}</h2>
                    <div className={styles['ImageWrapper']} >
                     <img src={apiResult[0].strDrinkThumb} alt='drink'></img>
                    </div>
                    <p>{apiResult[0].strAlcoholic}</p>
                    <h4>Glass: </h4><span>{apiResult[0].strGlass}</span>
                    <h4>Catagorie: </h4><span>{apiResult[0].strCategory}</span>
                    <h4>Ingredients:</h4>
                    <p>{apiResult[0].strMeasure1} {apiResult[0].strIngredient1} </p>
                    <p>{apiResult[0].strMeasure2} {apiResult[0].strIngredient2} </p>
                    <p>{apiResult[0].strMeasure3} {apiResult[0].strIngredient3} </p>
                    <p>{apiResult[0].strMeasure4} {apiResult[0].strIngredient4} </p>
                    <p>{apiResult[0].strMeasure5} {apiResult[0].strIngredient5}</p>
                    <p>{apiResult[0].strMeasure6} {apiResult[0].strIngredient6} </p>
                    <p>{apiResult[0].strMeasure7} {apiResult[0].strIngredient7} </p>
                    <p>{apiResult[0].strMeasure8} {apiResult[0].strIngredient8} </p>
                    <p>{apiResult[0].strMeasure9} {apiResult[0].strIngredient9} </p>
                    <h4>Recipe:</h4><span>{apiResult[0].strInstructions}</span>
                </>
            }
        </div>
    );
};