import React from 'react';
import MyButton from "./MyButton";
import getListOfCurrencies from "../../../services/cryptoCurrencyService";
import {useEffect, useState} from 'react'



const MySelect = () => {
    const [listOfCurrencies, setListOfCurrencies] = useState([])

    useEffect(async () => {
        const currencies = await getListOfCurrencies()
        setListOfCurrencies(currencies)
    }, [])

    return (

        <div>
            <div>
                <select>
                    {listOfCurrencies.map(currency =>
                        <option>
                            {currency.name}
                        </option>
                    )}
                </select>

                <MyButton/>
            </div>

        </div>


    );
};

export default MySelect;