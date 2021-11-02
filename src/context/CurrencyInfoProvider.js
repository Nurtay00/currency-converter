import React, {useState, createContext} from 'react';


export const InfoContext = createContext(null);

export const InfoProvider = ({children}) => {
    const [currentCurrencyInfo, setCurrentInfo] = useState({});

    const saveInfo = (value) => {
        setCurrentInfo(value)
    };

    return (
        <InfoContext.Provider
            value={{currentCurrencyInfo, saveInfo}}>{children}</InfoContext.Provider>
    );
};
