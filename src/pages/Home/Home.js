import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import {RecipePreviewer} from "../../components/RecipePreviewer/RecipePreviewer";
import styles from './Home.module.css'
import SearchBackground from '../../assets/pictures/SearchBackground.png'
export function Home() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [search, setSearch] = useState('none');
    const [searchResult,setSearchResult] = useState([])

    async function fetchData(data) {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data.cocktailName}`)
                setSearchResult(response.data.drinks)

                if(response.data.drinks=== null) {
                    setSearch('tryAgain')
                } else {
                    setSearch('success')
                }
            } catch (e) {
                console.error(e)
            }
        }

        useEffect(()  => {
            async function fetchPageFiller() {
                try {
                    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
                    setSearchResult(result.data.drinks)
                } catch (e) {
                    console.error(e)
                }
            } fetchPageFiller()
        },[])

    return (
        <div>
            <form onSubmit={handleSubmit(fetchData)}>
                <p className={styles['lookingGlass']}>🔍</p>
                <img src={SearchBackground} alt='backgroundSearchBar'/>
                <input type='text' {...register('cocktailName',
                    {
                        required: 'Zoekveld mag niet leeg zijn',
                    })}
                className={styles['searchField']}/>
                {errors.username && <p>{errors.username.message}</p>}
            </form>

            {search === 'none' &&
            <div className={styles['page-filler']}><RecipePreviewer apiResult= {searchResult} /></div>
            }

            {search === 'success' &&
                <div className={styles['page-filler']}><RecipePreviewer apiResult= {searchResult} /></div>
            }

            {search === 'tryAgain' &&
                <p>That did not lead to a result! Did you enter the name of the cocktail correctly? Partial names are fine! Or are you looking to search by ingredient, category or glass? If so go to the advanced search page! </p>
            }
            <li>
                <NavLink to="/AdvancedSearch">
                    Gevorderd zoeken!
                </NavLink>
            </li>

        </div>
    );
}