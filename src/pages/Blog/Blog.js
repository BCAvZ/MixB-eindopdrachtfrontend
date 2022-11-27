import {useEffect, useState} from  'react';
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import styles from './Blog.module.css'
import posts from '../../data/posts.json'

export function Blog() {

    const [searchResult,setSearchResult] = useState('')

    const {id} = useParams();


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${posts[id].Name}`)
                setSearchResult(response.data.drinks)
                console.log(response.data.drinks)
            } catch (e) {
                console.error(e)
            }
        } fetchData();
    },[id])

    let stars = '🌟';
    let starsCounter = stars.repeat(posts[id].Stars)

    return (
        <article>

            {searchResult &&
                <NavLink to={`/RecipePage/${searchResult[0].strDrink}`} className={styles['PreviewContainer']} >
                    <div className={styles['PreviewContainerText']} >
                        <div className={styles['ImageWrapper']}>
                            <img src={searchResult[0].strDrinkThumb} alt='drink'/>
                        </div>
                        <div className={styles['TextWrapper']}>
                            <h4> {searchResult[0].strDrink}</h4>
                            <p>  Click for recipe! </p>
                        </div>
                    </div>
                </NavLink>
            }

            <p>{posts[id].Date}</p>
            <p>{posts[id].Name}</p>
            <p>{starsCounter}</p>
            <h2>Review!</h2>
            <p>{posts[id].Review}</p>
            <h3>Difficulty!</h3>
            <p>{posts[id].Recipe_difficulty}</p>
            <h2>History!</h2>
            <p>{posts[id].History}</p>

        </article>
    );
}