import axios from 'axios'

export default class HttpService {
    get(url: string): Promise<any> {
        return axios.get(url);
    }

    post(url: string, data: any): Promise<any> {
        return axios.post(url, data);
    }

    put(url: string, data: any): Promise<any> {
        return axios.put(url, data)
    }

    delete(url: string): Promise<any> {
        return axios.delete(url)
    }
}