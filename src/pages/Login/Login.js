import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

export function Login() {
    const { login } = useContext(AuthContext)
    const { register, handleSubmit, formState: {errors}  } = useForm();

    async function loginUser(data) {
        try {
            const result  = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                data
            )
            login(result.data.accessToken)
        }catch (e) {
            console.log(e)
        }}

    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <form onSubmit={handleSubmit(loginUser)}>
                <fieldset>
                    <h4>Gebruikersnaam:</h4>
                    <input type='text' {...register('username',
                        {
                            required: 'Gebruikersnaam mag niet leeg zijn',
                            minLength: {
                                value: 6,
                                message: 'Er moeten minimaal 6 karakters gebruikt worden'
                            },
                        })}/>
                    {errors.username && <p>{errors.username.message}</p>}

                    <h4>Wachtwoord:</h4>
                    <input type='text' {...register('password', {required: 'Wachtwoord mag niet leeg zijn', minLength: {
                            value: 6,
                            message: 'Er moeten minimaal 6 karakters gebruikt worden'
                        },
                    })}/>
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit">Inloggen</button>
                </fieldset>
            </form>
            <Link to="/registration">Heb je nog geen account? Klik hier om je te registreren bij de leukste app van Nederland!</Link>
        </section>
    );
}
