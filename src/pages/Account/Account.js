import React from 'react';

export function Account({toggleAuth}) {

    function signOut() {
        toggleAuth(false);
    }

    return (
        <div>
            <p>je bent er!</p>

            <button type="button" onClick={signOut}>
                Uitloggen
            </button>

        </div>
    );
}
