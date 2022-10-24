import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";

export function Login() {

    const { login } = useContext(AuthContext)

    const [loginInfo, setLoginInfo] = useState({
        username:'',
        password:'',
    })

    function handleSubmit (e) {
        e.preventDefault()
        loginUser()
    }

    async function loginUser() {

        const { username, password} = loginInfo
        const userInfo = {username, password};

        try {
            const result  = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                userInfo
            )
            login(result.data.accessToken)
        }catch (e) {
            console.log(e)
        }}

    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="gebruikersnaam" onChange={(e) => setLoginInfo({...loginInfo, username:e.target.value})} value={loginInfo.username}/>
                <input type="text" placeholder="wachtwoord" onChange={(e) => setLoginInfo({...loginInfo, password:e.target.value})} value={loginInfo.password}/>
                <button type="submit">Inloggen</button>
            </form>



            <Link to="/registration">Heb je nog geen account? Klik hier om je te registreren bij de leukste app van Nederland!</Link>
        </section>
    );
}
