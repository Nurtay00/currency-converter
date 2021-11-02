import React, { createContext, useState } from 'react';


export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const setLoading = (loadingState)=> {
        setIsLoading(loadingState);
    };

    return (
        <LoadingContext.Provider
            value={{
                isLoading,
                setLoading,
            }}>
            {children}
        </LoadingContext.Provider>
    );
};
