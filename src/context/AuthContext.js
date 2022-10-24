import React, {createContext, useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: false,
        status:'pending',
    });

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token);
        } else {
            console.log('Geen token aanwezig')
            setAuth({
                ...auth,
                status:'done',
            })
        }
    }, []);

    async function fetchUserData(token) {
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user',{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data);

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    id:response.data.id,
                },
                status: 'done',
            })
        } catch (e) {
            console.error(e);
        }}

    function login(token) {


        localStorage.setItem('token',token)
        const decoded=jwtDecode(token);
        console.log(decoded)

        fetchUserData(token)

        history.push(`/Account/${decoded.username}`);

    }

    function logout() {

        console.log('Gebruiker is uitgelogd!');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
        });

        localStorage.removeItem('token');
        history.push('/');
    }

    const contextData = {
        ...auth,
        login: login,
        logout: logout,
        setAuth:setAuth,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider


















// export const AuthContext = createContext({});
//
// function AuthContextProvider({children}) {
//
//     const [isAuth, toggleIsAuth] = useState(false);
//     const history = useHistory()
//
//     function login() {
//         console.log('Gebruiker is ingelogd!');
//         toggleIsAuth(true);
//         history.push('/profile');
//     }
//
//     function logout() {
//         console.log('Gebruiker is uitgelogd!');
//         toggleIsAuth(false);
//         history.push('/');
//     }
//
//     const contextData = {
//         isAuth: isAuth,
//         login: login,
//         logout: logout,
//     };
//
//     return (
//         <AuthContext.Provider value={contextData}>
//             {children}
//         </AuthContext.Provider>
//     );
// }