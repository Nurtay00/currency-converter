import {useContext} from 'react';
import {LoadingContext} from "../context/LoadingProvider";


export default function useLoading() {
    const {setLoading, isLoading} = useContext(LoadingContext);

    return {
        isLoading, setLoading
    }
}
