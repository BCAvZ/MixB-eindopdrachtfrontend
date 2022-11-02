import {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {RecipePreviewer} from "../../components/RecipePreviewer/RecipePreviewer";
export function AdvancedSearch() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [searchResult,setSearchResult] = useState([])

    async function fetchData(data) {
        try {
            if (data.name) {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data.name}`)
                setSearchResult(response.data.drinks)
            } else if (data.ingredient) {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.ingredient}`)
                setSearchResult(response.data.drinks)
                console.log(response)
            }
        } catch (e) {
            console.error(e)
        }
    }

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
                <input type='text' autoComplete='email' {...register('name')}/>
                {errors.email && <p>{errors.email.message}</p>}

                <h4>Search by ingredient</h4>
                <input type='text' autoComplete='email' {...register('ingredient')}/>
                {errors.email && <p>{errors.email.message}</p>}

                <h4>Search by category</h4>
                <input type='text' autoComplete="new-password" {...register('category', {minLength: {
                        value: 6,
                        message: 'Er moeten minimaal 6 karakters gebruikt worden'
                    },
                })}/>
                {errors.password && <p>{errors.password.message}</p>}

                <h4>Search by glass</h4>
                <input type='text' autoComplete="new-password" {...register('glass', {minLength: {
                        value: 6,
                        message: 'Er moeten minimaal 6 karakters gebruikt worden'
                    },
                })}/>
                {errors.repeatedPassword && <p>{errors.repeatedPassword.message}</p>}

                <button type="submit">Indienen</button>
            </form>

            {searchResult &&
                <RecipePreviewer apiResult={searchResult}></RecipePreviewer>
            }

        </div>
    );
}