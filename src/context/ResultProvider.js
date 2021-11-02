import React, {useState, createContext} from 'react';


export const ResultContext = createContext(null);

export const ResultProvider = ({children}) => {
    const [currentResult, setCurrentQuizResult] = useState({});

    const saveResult = (value) => {
        setCurrentQuizResult(value)
    };

    return (
        <ResultContext.Provider
            value={{currentResult, saveResult}}>{children}</ResultContext.Provider>
    );
};
