import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

export function Registration() {

    const history = useHistory();

    const [registerInfo, setRegisterInfo] = useState({
        username:'',
        email:'',
        password:'',
        role: ["user"],
    })

    function handleSubmit (e) {
        e.preventDefault()
        registerUser()
    }

    async function registerUser() {

        const { username, email, password, role } = registerInfo
        const user = {username, email, password, role};

        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                user
            )
            history.push('/')
        } catch (e) {
            console.error(e)
            console.log(e.response.message)
        }}

    return (
        <>
            <h1>Registreren</h1>
            <p>Maak een account aan door alle drie de velden in te vullen en vervolgens op indienen te klikken!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="emailadres" onChange={(e) => setRegisterInfo({...registerInfo, email:e.target.value})} value={registerInfo.email}/>
                <input type="text" placeholder="gebruikersnaam" onChange={(e) => setRegisterInfo({...registerInfo, username:e.target.value})} value={registerInfo.username}/>
                <input type="text" placeholder="wachtwoord" onChange={(e) => setRegisterInfo({...registerInfo, password:e.target.value})} value={registerInfo.password}/>
                <button type="submit">indienen</button>
            </form>
            <Link to="/Login">Heb je al een account? Je kunt je hier inloggen.</Link>
        </>
    );
}
