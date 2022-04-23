import React from 'react';
import SelectButton from "./SelectButton";
import getListOfCurrencies, {cryptoCurrencyService} from "../../services/cryptoCurrencyService";
import {useEffect, useState} from 'react'



const Select = ({setSelectedCurrency}) => {
    const [listOfCurrencies, setListOfCurrencies] = useState([])


    useEffect( async () => {
        const currencies = await cryptoCurrencyService.getAssets();
        const filtred  = currencies.filter(value => value.type_is_crypto === 1)
        setListOfCurrencies(filtred)
    }, [])

    const setCurrency=(event)=>{
        const currencyName=event.target.value;
        const currency=listOfCurrencies.find(currency=>currency.asset_id===currencyName)
        setSelectedCurrency(currency)
    }
    return (

        <div>
            <div>
                <select onChange={setCurrency}>
                    {listOfCurrencies.map(currency =>
                        <option key={currency.asset_id}>
                            {currency.asset_id}
                        </option>

                    )}
                </select>

                <SelectButton />
            </div>

        </div>


    );
};

export default Select;
