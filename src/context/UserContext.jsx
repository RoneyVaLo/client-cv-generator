import { createContext, useContext, useEffect, useState } from "react";

import CVData from '../data/userData.json';

export const UserContext = createContext();

export const useUserData = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("Error creating user context");
    }

    return context;
}

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(CVData);


    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
};