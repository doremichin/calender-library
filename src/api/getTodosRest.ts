import axios, { AxiosRequestConfig } from "axios"

export const getTodosRest  = async () => {
    const config : AxiosRequestConfig<any> = {
        url : 'https://jsonplaceholder.typicode.com/todos',
        method : 'get',
    }
    const result = await axios(config);
    return result;
}
