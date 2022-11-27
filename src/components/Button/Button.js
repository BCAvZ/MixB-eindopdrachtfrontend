import React from 'react';
import styles from './Button.module.css'

export function Button({type, children}) {
    return (
        <p>
            <button type={type} >{children}</button>
        </p>
    );
};