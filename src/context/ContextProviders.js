import React from 'react';

import {LoadingProvider} from './LoadingProvider';
import {ResultProvider} from "./ResultProvider";
import {InfoProvider} from "./CurrencyInfoProvider";

export const ContextProviders = ({children}) => {
    return (
        <InfoProvider>
            <ResultProvider>
                <LoadingProvider>{children}</LoadingProvider>
            </ResultProvider>
        </InfoProvider>
    );
};
