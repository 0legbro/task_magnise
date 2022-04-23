import {axiosService} from "./axios.service";
import {apikey, urls} from "../constants/urls";

export const cryptoCurrencyService = {
    getAssets: () => axiosService.get(urls.assets, {
        params: {
            apikey
        }
    }).then(value => value.data)
}

