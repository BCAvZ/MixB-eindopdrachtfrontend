import axios from "axios";
import {useParams} from "react-router-dom";
import React, { useState} from 'react';
import {useEffect} from "react";
import {Recipe} from "../../components/Recipe/Recipe";

export function RecipePage() {

    const [searchResult,setSearchResult] = useState([])
    const {id} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
                setSearchResult(response.data.drinks)

            } catch (e) {
                console.error(e)
            }
        } fetchData();
},[])

    return (
        <div>
            <Recipe
                apiResult={searchResult}
            />
        </div>
    );
}

