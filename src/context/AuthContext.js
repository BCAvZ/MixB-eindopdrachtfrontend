import React, {createContext, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: false,
        status:'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token);
        } else {
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

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    name: response.data.username,
                    id: response.data.id,
                    profilePicture: response.data.profilePicture
                },
                status: 'done',
            })
        } catch (e) {
            console.error(e);
            setAuth({
                ...auth,
                status:'done'
            })
            localStorage.removeItem('token');
        }}

    function login(token) {
        localStorage.setItem('token',token)
        navigate('/');

        fetchUserData(token)
    }

    function logout() {
        setAuth({
            ...auth,
            isAuth: false,
            user: false,
        });

        localStorage.removeItem('token');
        navigate('/');
    }

    const contextData = {
        ...auth,
        login: login,
        logout: logout,
        loginStatus:auth.isAuth,
        userName:auth.user.name,
        profilePicture:auth.user.profilePicture,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider

