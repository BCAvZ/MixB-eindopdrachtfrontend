import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

const apiKey = 1

export function Home() {

    const [Recipes,setRecipes] = useState({})

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
                console.log(result.data)
                setRecipes(result.data.drinks)

            } catch (e) {
                console.error(e)
            }
        }

        if (Recipes) {
            fetchData();
        }

    }, [])


    return (
        <div>
            <p>homepagina</p>

            {Object.keys(Recipes).length > 0 &&

                <>
                    <p> {Recipes[0].strDrink}</p>
                    <img src={Recipes[0].strDrinkThumb} alt='picture of a drink'></img>
                </>
            }

            <li>
                <NavLink to="/AdvancedSearch">
                    Gevorderd zoeken!
                </NavLink>
            </li>

        </div>
    );
}