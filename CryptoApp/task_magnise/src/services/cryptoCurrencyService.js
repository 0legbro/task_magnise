import axios from "axios";

async function getListOfCurrencies() {


    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    return data
}


export default getListOfCurrencies