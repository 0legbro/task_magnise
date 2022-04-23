import React from 'react';
import {type} from "@testing-library/user-event/dist/type";


const MarketData = ({selectedCurrency}) => {

    return (

        <div>

            {selectedCurrency
                ?
                <div>
                    <p>Symbol: {selectedCurrency.asset_id}</p>
                    <p>Price:  {`${selectedCurrency.price_usd.toFixed(3)} USD`}</p>
                   <p>Date: {selectedCurrency.data_trade_end}</p>

                </div>
                :
                <p>Виберіть користувача/Криптовалюту</p>}
        </div>
    );
};

export default MarketData;
