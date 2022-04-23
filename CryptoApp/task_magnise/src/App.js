import React from 'react'
import './App.css';
import MySelect from "./Component/UI/select/MySelect";
import MarketData from "./Component/UI/MarketData/MarketData"
import Graph from "./Component/UI/CryptocurrenseGraph/Graph";
import Graphik from './Component/UI/CryptocurrenseGraph/Graphik.png'
import {useState} from 'react'
import {useEffect} from 'react'


const App=() => {
  return (
      <div className="App">
          <MySelect />
          <MarketData />
          <Graph/>

      </div>
  );
}

export default App;
