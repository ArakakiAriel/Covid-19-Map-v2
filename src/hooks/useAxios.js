import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

export const useAxios = async (url, method='GET', data={}, headers={}) => {
    
    const isMounted = useRef(true);

    const [state, setState] = useState({ data_response: null, loading: true, error: false });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    await useEffect( async () => {

        setState({ data_response: null, loading: true, error: false });

        let result = await axios({
            method,
            url,
            headers,
            data
        }).then(function (response) {
            if ( isMounted.current ) { //Conditional that check if the Component is mounted or not.
                setState({
                    loading: false,
                    error: false,
                    data_response: response.data
                });
            }
        }).catch(function (error) {
            setState({error: true, loading: false, data_response: {error_message: error.response.data.message}})
        });

    },[url, method, data, headers])

    return state;
}
