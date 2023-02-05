import { useState } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'http://i8a109.p.ssafy.io:9090'

export const useAxios = () => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const operation = async(params) => {
        console.log('useAxios', params)
        try {
            setLoading(true)
            const result = await axios.request(params);
            console.log("result", result)
            setResponse(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, operation };
};

export default useAxios;