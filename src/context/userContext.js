import React, { useState, useEffect, useContext, createContext } from 'react';

const userContext = createContext();

export function UserProvider({ children }) {
    const user = useProvideUser();
    return <userContext.Provider value={user}>{children}</userContext.Provider>
}

export const useUser = () => {
    return useContext(userContext);
}

function useProvideUser() {

    const [profileInfo, setProfileInfo] = useState({
        completed: false,
        id: 0,
        title: "title",
        userId: 0
    });

    const getUserData = () => {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then(json => setProfileInfo(json));
        return { profileInfo };
    }

    return {
        getUserData,
    };
}
