import { useContext } from 'react';
import {ResultContext} from "../context/ResultProvider";

const useResult = () => {
    const { currentResult, saveResult } = useContext(ResultContext);

    return {
        currentResult,
        saveResult,
    };
};

export default useResult;
