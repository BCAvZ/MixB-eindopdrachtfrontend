import {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {RecipePreviewer} from "../../components/RecipePreviewer/RecipePreviewer";
import styles from './AdvancedSearch.module.css'

export function AdvancedSearch() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [searchResult,setSearchResult] = useState([])
    // const [submitData, setSubmitData] = useState([])
    // const [pageResult, setPageResult] = useState([])

    async function fetchData(data) {
        try {
            if (data.name) {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data.name}`)
                setSearchResult(response.data.drinks)
                console.log(response)
            } else if (data.ingredient) {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.ingredient}`)
                setSearchResult(response.data.drinks)
            } else if (data.category) {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${data.category}`)
                setSearchResult(response.data.drinks)
            } else {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${data.glass}`)
                setSearchResult(response.data.drinks)
                console.log(response)
            }
        } catch (e) {
            console.error(e)
        }
    }

    // function filter () {
    //     if(submitData.category) {
    //         searchResult.category.map((result) => {
    //             return setPageResult(result.category === submitData.category)
    //         })
    //     }
    // }

    function removeEmptyFields(convertedData) {
        Object.keys(convertedData).forEach(key => {
                if (convertedData[key] === '' || convertedData[key] == null) {
                    delete convertedData[key];
                } fetchData(convertedData)
            }
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(removeEmptyFields)}>
                <h4>Search by name</h4>
                <input type='text' {...register('name')}/>
                {errors.email && <p>{errors.email.message}</p>}

                <h4>Search by ingredient</h4>
                <input type='text' {...register('ingredient')}/>
                {errors.email && <p>{errors.email.message}</p>}

                <h4>Search by category</h4>
                    <select {...register('category')}>
                        <option value=''>Unselected</option>
                        <option value='Ordinary Drink'>Ordinary Drink</option>
                        <option value="Cocktail">Cocktail</option>
                        <option value='Shake'>Shake</option>
                        <option value='Cocoa'>Cocoa</option>
                        <option value='Shot'>Shot</option>
                        <option value='Coffee / Tea'>Coffee / Tea</option>
                        <option value='Homemade Liqueur'>Homemade Liqueur</option>
                        <option value='Punch / Party Drink'>Punch / Party Drink</option>
                        <option value='Beer'>Beer</option>
                        <option value='Other/Unknown'>Other/Unknown</option>
                    </select>
                {errors.password && <p>{errors.password.message}</p>}

                <h4>Search by glass</h4>
                <select {...register('glass')}>
                    <option value=''>Unselected</option>
                    <option value='Highball glass'>Highball glass</option>
                    <option value='Cocktail glass'>Cocktail glass</option>
                    <option value="Old-fashioned glass">Old-fashioned glass</option>
                    <option value='Whiskey Glass'>Whiskey Glass</option>
                    <option value='Collins glass'>Collins glass</option>
                    <option value='Pousse cafe glass'>Pousse cafe glass</option>
                    <option value='Champagne flute'>Champagne flute</option>
                    <option value='Whiskey sour glass'>Whiskey sour glass</option>
                    <option value='Cordial glass'>Cordial glass</option>
                    <option value='Brandy snifter'>Brandy snifter</option>
                    <option value='White wine glass'>White wine glass</option>
                    <option value='Nick and Nora Glass'>Nick and Nora Glass</option>
                    <option value='Hurricane glass'>Hurricane glass</option>
                    <option value='Coffee mug'>Coffee mug</option>
                    <option value='Shot glass'>Shot glass</option>
                    <option value='Jar'>Jar</option>
                    <option value='Irish coffee cup'>Irish coffee cup</option>
                    <option value='Punch bowl'>Punch bowl</option>
                    <option value='Pitcher'>Pitcher</option>
                    <option value='Pint glass'>Pint glass</option>
                    <option value='Copper Mug'>Copper Mug</option>
                    <option value='Wine Glass'>Wine Glass</option>
                    <option value='Beer mug'>Beer mug</option>
                    <option value='Margarita/Coupette glass'>Margarita/Coupette glass</option>
                    <option value='Beer pilsner'>Beer pilsner</option>
                    <option value='Beer Glass'>Beer Glass</option>
                    <option value='Parfait glass'>Parfait glass</option>
                    <option value='Mason jar'>Mason jar</option>
                    <option value='Margarita glass'>Margarita glass</option>
                    <option value='Martini Glass'>Martini Glass</option>
                    <option value='Balloon Glass'>Balloon Glass</option>
                    <option value='Coupe Glass'>Coupe Glass</option>
                </select>

                {/*<input type='text' autoComplete="new-password" {...register('glass', {minLength: {*/}
                {/*        value: 6,*/}
                {/*        message: 'Er moeten minimaal 6 karakters gebruikt worden'*/}
                {/*    },*/}
                {/*})}/>*/}
                {errors.repeatedPassword && <p>{errors.repeatedPassword.message}</p>}

                <button type="submit">Indienen</button>
            </form>
            <div>
                {searchResult &&
                    <RecipePreviewer apiResult={searchResult}></RecipePreviewer>
                }
            </div>
        </div>
    );
}