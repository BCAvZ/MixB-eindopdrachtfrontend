import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Recipe} from "../../components/Recipe/Recipe";

export function RandomCocktail() {

    const [randomCocktail,setRandomCocktail] = useState({})

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                console.log(result.data)
                setRandomCocktail(result.data.drinks)

            } catch (e) {
                console.error(e)
            }
        }

        if (randomCocktail) {
            fetchData();
        }

    }, [])


    return (
        <div>
            <Recipe
            apiResult={randomCocktail}
            />
        </div>
    );
}