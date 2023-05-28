// import React, { useState, useEffect, useContext, createContext } from 'react';

//const userContext = createContext();

//export function UserProvider({ children }) {
//    const user = useProvideUser();
//    return <userContext.Provider value={user}>{children}</userContext.Provider>
//}

//export const useUser = () => {
//    return useContext(userContext);
//}

//function useProvideUser() {

//    const getUserData = () => {

//        const info = fetch('https://jsonplaceholder.typicode.com/todos/1')
//            .then((response) => response.json())
//            .then(json => { return json });
//        return info;
//    }

//    return {
//        getUserData
//    };
//}
