// import { useEffect, useState } from 'react';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8080l';

// export const useAxios = (axiosParams) => {
//   const [response, setResponse] = useState({});
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
  
//   const fetchData = async (params) => {
//     try {
//       const result = await axios.request(params)
//       setResponse(result.data)
//     } catch {
//       setError(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchData(axiosParams)
//   }, [])
  
//   return { response, error, loading }
// }

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    const fetchData = async (params) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
      if (response && axiosParams.title != response.title) {
        fetchData(axiosParams);
      }
    }, []); 

    return { response, error, loading };
};

export default useAxios;