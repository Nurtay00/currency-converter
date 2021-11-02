import axios from 'axios';
const axiosApiInstance = axios.create();

class DataService {

    async getConverter(format) {
        const headers = {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "XMLHttpRequest",
                "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            }
        };
        const url = `https://v6.exchangerate-api.com/v6/73093ee2dec12c607a3c4640/latest/${format}`;

        return axiosApiInstance.get(url,headers).then((response) => response.data);
    }
}

export const dataService = new DataService();