import axios from "axios";

export async function changeUserInfo(data) {

    const token = localStorage.getItem('token');

    try {
        await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', data
        ,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        window.location.reload();
    } catch (e) {
        console.error(e)
    }
}
