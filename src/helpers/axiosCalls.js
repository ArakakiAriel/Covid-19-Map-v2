import axios from 'axios'

export const axiosCall = async (url, method='GET', data={}, headers={}) => {
        console.log("ENTRO AL AXIOS CALL")
        const response = await axios({
            method,
            url,
            headers,
            data
        }).then(function (response) {
            return {response_data: response.data, loading:false, error:false};
        }).catch(function (error) {
            return {response_data:error.response.data.message, loading:false, error:true};
        });
        return response;
}
