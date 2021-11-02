import { useContext } from 'react';
import {InfoContext} from "../context/CurrencyInfoProvider";

const useCurrencyInfo = () => {
    const { currentCurrencyInfo, saveInfo } = useContext(InfoContext);

    return {
        currentCurrencyInfo,
        saveInfo,
    };
};

export default useCurrencyInfo;
