import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Recipe} from "../../components/Recipe/Recipe";

export function RandomCocktail() {

    const [randomCocktail,setRandomCocktail] = useState({})

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                setRandomCocktail(result.data.drinks)

            } catch (e) {
                console.error(e)
                alert('Error! Please try again in 30 seconds, if it still fails the API might be overloaded try again tomorrow')
            }
        }

        if (randomCocktail) {
            fetchData();
        }

    }, [])


    return (
        <>
            <Recipe
            apiResult={randomCocktail}
            />
        </>
    );
}