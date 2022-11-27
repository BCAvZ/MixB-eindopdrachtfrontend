import React, {useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";
import {useForm} from "react-hook-form";
import {changeUserInfo} from "../../helper functions/userInfoUpdaters";
import styles from './Account.module.css'

export function Account() {

    const {logout,userName, profilePicture} = useContext(AuthContext)
    const { register, handleSubmit, formState: {errors} } = useForm();

    function fileConverter(data) {
        if(data.base64Image.length) {
            const file = data.base64Image[0]
            const reader = new FileReader()

            reader.addEventListener('load', () => {
                data.base64Image=reader.result
                removeEmptyFields(data)
            })
            reader.readAsDataURL(file);
        } else{
            delete data.base64Image
            removeEmptyFields(data)
        }
    }

    function removeEmptyFields(convertedData) {
        Object.keys(convertedData).forEach(key => {
            if (convertedData[key] === '' || convertedData[key] == null) {
                delete convertedData[key];
            } changeUserInfo(convertedData)
        }
        );
    }

    return (
        <>
            <h1>This is the profile page of {userName}! Welcome!</h1>
            <p>Here you can change your profile picture, email and password! You can change them seperately or together. For example if you want to change only your password fill in those fields and leave email and profile picture blank.</p>

            <img src={profilePicture} alt='no profile picture set' className={styles['profilePicture']}/>

            <form onSubmit={handleSubmit(fileConverter)}>
                <h4>New email:</h4>
                <input type='email' autoComplete='email' {...register('email')}/>
                {errors.email && <p>{errors.email.message}</p>}

                <h4>New password:</h4>
                <input type='password' autoComplete="new-password" {...register('password', {minLength: {
                        value: 6,
                        message: 'Er moeten minimaal 6 karakters gebruikt worden'
                    },
                })}/>
                {errors.password && <p>{errors.password.message}</p>}

                <h4>Repeat new password:</h4>
                <input type='password' autoComplete="new-password" {...register('repeatedPassword', {minLength: {
                        value: 6,
                        message: 'Er moeten minimaal 6 karakters gebruikt worden'
                    },
                })}/>
                {errors.repeatedPassword && <p>{errors.repeatedPassword.message}</p>}

                <h4>Profile picture:</h4>
                <input type='file' accept='image/png' id='base64Image'{...register('base64Image')}/>
                <button type="submit">Indienen</button>
            </form>
            <button type="button" onClick={logout}>
                Uitloggen
            </button>
        </>
    );
}
