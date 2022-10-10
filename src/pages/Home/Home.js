import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

export function Home() {

    const [recipes,setRecipes] = useState({})
    const [userInput, setUserInput] = useState("")

    console.log(userInput)

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

        if (recipes) {
            fetchData();
        }

    }, [])


    return (
        <div>
            <p>homepagina</p>


            <textarea onChange={(e) => setUserInput(e.target.value)}  placeholder="Typ hier de naam van je cocktail, een ingredient van de cocktail of een categorie zoals shotglas!"> </textarea>

            {Object.keys(recipes).length > 0 &&
                <>
                    <p> {recipes[0].strDrink}</p>
                    <img src={recipes[0].strDrinkThumb} alt='a drink'></img>
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