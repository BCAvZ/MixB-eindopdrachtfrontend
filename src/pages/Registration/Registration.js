import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";

export function Registration() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}  } = useForm();
    // const { loadingRegistration, setLoadingRegistration } = useState(false)

    async function registerUser(data) {

        // setLoadingRegistration(true)

        const user = {
            ...data,
            role: ["user"],
        };

        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                user
            )
            navigate('/Login')
        } catch (e) {
            console.error(e)
            console.log(e.response.message)
            alert('Error! Please try again in 30 seconds')
        }}


    return (
        <>
            <h1>Registreren</h1>
            <p>Maak een account aan door alle drie de velden in te vullen en vervolgens op indienen te klikken!</p>
            {/*{loadingRegistration && <p>loading ...</p>}*/}
            <form onSubmit={handleSubmit(registerUser)}>
                <fieldset>
                    <h4>Gebruikersnaam:</h4>
                    <input type='text' autoComplete='username' {...register('username',
                        {
                            required: 'Gebruikersnaam mag niet leeg zijn',
                            minLength: {
                                value: 6,
                                message: 'Er moeten minimaal 6 karakters gebruikt worden'
                            },
                        })}/>
                    {errors.username && <p>{errors.username.message}</p>}

                    <h4>Email:</h4>
                    <input type='email' autoComplete='email' {...register('email', {
                            required: 'Email mag niet leeg zijn',
                     })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <h4>Wachtwoord:</h4>
                    <input type='password' autoComplete="new-password" {...register('password', {required: 'Wachtwoord mag niet leeg zijn', minLength: {
                          value: 6,
                          message: 'Er moeten minimaal 6 karakters gebruikt worden'
                        },
                    })}/>
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit">indienen</button>
                </fieldset>
            </form>
            <Link to="/Login">Heb je al een account? Je kunt je hier inloggen.</Link>
        </>
    );
}