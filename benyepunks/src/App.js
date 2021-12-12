import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=%7B%7B0xA455e4839822d1eC47495BEAEBb1EfDaceefC9dD')
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts();
  }, [])

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={'King Punk'}
        traits={[{value: 7}]}
        image=""
      />
      <Main punkListData={punkListData}/>
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
