import React from 'react'
import './App.css';
import Select from "./components/select/Select";
import MarketData from "./components/MarketData/MarketData"
import Graph from "./components/CryptocurrenseGraph/Graph";
import {useState, useEffect} from 'react'


const App=() => {
    const [selectedCurrency,setSelectedCurrency]=useState(null)
  return (
      <div className="App">
          <Select setSelectedCurrency={setSelectedCurrency}/>
          <MarketData selectedCurrency={selectedCurrency}/>
          <Graph/>
      </div>
  );
}

export default App;
