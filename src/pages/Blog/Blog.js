import {useEffect, useState} from  'react';
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import styles from './Blog.module.css'
import posts from '../../data/posts.json'

export function Blog() {

    const [searchResult,setSearchResult] = useState(null)

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
    },[])

    let stars = '🌟';
    let starsCounter = stars.repeat(posts[id].Stars)

    // function starCounter(data) {
    //     return data*stars;
    // }

    return (
        <div>

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
            {/*"Id":"0",*/}
            {/*"Name": "Mojito",*/}
            {/*"Date": "4-11-2022",*/}
            {/*"Review": "Personal favorite! The first cocktail i order when i am on vacation in hotter climates.",*/}
            {/*"Recipe difficulty": "Medium",*/}
            {/*"History": "Havana, Cuba, is the birthplace of the mojito, although its exact origin is the subject of debate. It was known that the local South American Indians had remedies for various tropical illnesses, so a small boarding party went ashore on Cuba and came back with ingredients for an effective medicine. The ingredients were aguardiente de caña (translated as burning water), a crude form of rum made from sugar cane) mixed with local tropical ingredients: lime, sugarcane juice, and mint. Lime juice on its own would have significantly prevented scurvy and dysentery, and tafia/rum was soon added as it became widely available to the British (ca. 1650). Mint, lime and sugar were also helpful in hiding the harsh taste of this spirit. Another theory is that it was invented by Sir Francis Drake. The El Draque cocktail was prepared with brandy.[10] While this drink was not called a mojito at this time, it was the original combination of these ingredients.",*/}
            {/*"Stars": "5"*/}

            <p>aaa</p>
        </div>
    );
}