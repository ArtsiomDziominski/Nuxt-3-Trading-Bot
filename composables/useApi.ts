import axios from 'axios'

export const useApi = () => {
    const config = computed(() => useRuntimeConfig());
    const BURL = computed(() => config.value.public.API_URL);

    const get = async (endpoint: string, query?: string) => {
        try {
            const headers = getHeadersRequest();
            const url = BURL.value + endpoint + (query ? `?${query}` : '');

            const response = await axios.get(url, headers);

            return response.data
        } catch (error: any) {
            return error?.response?.data;
        }
    }

    const post = async (endpoint: string, body: any, query?: string) => {
        try {
            const headers = getHeadersRequest()
            const url = BURL.value + endpoint + (query ? `?${query}` : '');

            const response = await axios.post(url, body, headers)

            return response.data
        } catch (error: any) {
            console.log('error', error);
            return error?.response?.data;
        }
    }

    const put = async (endpoint: string, body: any, query?: string) => {
        try {
            const headers = getHeadersRequest()
            const url = BURL.value + endpoint + (query ? `?${query}` : '');

            const response = await axios.put(url, body, headers)

            return response.data
        } catch (error: any) {
            return error?.response?.data;
        }
    }

    const del = async (endpoint: string, body: any, query: string): Promise<any> => {
        try {
            const url = BURL.value + endpoint + (query ? `?${query}` : '');
            const response = await axios.delete(url, {
                data: body,
                headers: getHeadersRequestDelete(),
            });
            return response.data;
        }
        catch (e) {
            console.log(e);
        }
    };

    return {
        get,
        post,
        put,
        del
    }
}
